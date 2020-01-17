<template>
    <div>
        <a-card
                :hoverable="true"
                class="code-box"
                title="编辑博客">
            <a-form
                    :form="form"
                    @submit="handleSubmit">
                <a-form-item
                        label="标题">
                    <a-input
                            v-decorator="[ 'title', {rules: [{required: true, message: '请输入标题',},{max: 30, message: '标题长度不能超过30',}]}]"/>
                </a-form-item>

                <a-form-item
                        label="简介">
                    <a-textarea
                            v-decorator="['desc',{rules: [{max: 200, message: '简介长度不能超过200',}, {required: true, message: '请输入简介',}]}]">
                    </a-textarea>
                </a-form-item>

                <a-form-item
                        label="菜单">
                    <a-tree-select
                            showSearch
                            placeholder="请选择菜单"
                            allowClear
                            treeDefaultExpandAll
                            :treeData="treeData"
                            v-decorator="['menuId', {rules: [{required: true, message: '请选择菜单',}]}]"
                            @change="onChange"
                    >
                    </a-tree-select>
                </a-form-item>

                <a-form-item
                        label="正文">
                    <mavon-editor
                            class="z-index-class"
                            v-model="content"
                            :toolbars="toolbars"
                            :scrollStyle="true">
                    </mavon-editor>

                </a-form-item>

                <a-form-item>
                    <a-button
                            type="primary"
                            html-type="submit">
                        提交
                    </a-button>
                </a-form-item>
            </a-form>
        </a-card>
    </div>

</template>

<script>
    import {addBlog, getMenu, getBlogDetail} from '../../common/request';

    export default {
        name: "BlogEdit",
        props: {
            menuId: {
                type: String,
                default: null
            },
            blogId: {
                type: String,
                default: null
            },
            addFlag: {
                type: String,
                default: '1'
            }
        },
        data() {
            return {
                toolbars: {
                    bold: true, // 粗体
                    italic: true, // 斜体
                    header: true, // 标题
                    underline: true, // 下划线
                    strikethrough: true, // 中划线
                    mark: true, // 标记
                    superscript: true, // 上角标
                    subscript: true, // 下角标
                    quote: true, // 引用
                    ol: true, // 有序列表
                    ul: true, // 无序列表
                    link: true, // 链接
                    imagelink: true, // 图片链接
                    code: true, // code
                    table: true, // 表格
                    fullscreen: true, // 全屏编辑
                    readmodel: true, // 沉浸式阅读
                    htmlcode: true, // 展示html源码
                    help: true, // 帮助
                    /* 1.3.5 */
                    undo: true, // 上一步
                    redo: true, // 下一步
                    trash: true, // 清空
                    /* 1.4.2 */
                    navigation: true, // 导航目录
                    /* 2.1.8 */
                    alignleft: true, // 左对齐
                    aligncenter: true, // 居中
                    alignright: true, // 右对齐
                    /* 2.2.1 */
                    subfield: true, // 单双栏模式
                    preview: true, // 预览
                    save: true // 保存（触发events中的save事件）
                },
                form: this.$form.createForm(this),
                content: "",
                treeData: [],
                value: null,
            };
        },

        methods: {

            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFieldsAndScroll((err, values) => {
                    if (!err) {
                        values.content = this.content;
                        window.console.log('Received values of form: ', values);
                        if(this.addFlag){
                            addBlog(values).then(res => {
                                if (res.status === 200 && res.data.code === "0") {
                                    this.$message.success('提交成功！');
                                    this.form.resetFields();
                                    this.content = "";
                                }else {
                                    this.$message.error(res.data.msg | '发生错误，请稍后重试');
                                }
                            })
                        }

                    }
                });
            },
            onChange: function (value) {
                window.console.log("select menu" + value);
            },
            transField(allMenu) {
                const result = [];
                for (const menu of allMenu) {
                    const res = {};
                    res.value = String(menu.id);
                    res.label = menu.name;
                    res.parentId = 0;
                    if (menu.children) {
                        res.children = this.transField(menu.children);
                        for (const children of res.children) {
                            children.parentId = res.value;
                        }

                    }
                    result.push(res);
                }
                return result;
            },
            /**
             * 获取博客详情
             * @param menuId
             * @param blogId
             */
            getBlogDetail: function (menuId, blogId) {
                getBlogDetail(menuId, blogId).then(res => {
                    //获取菜单数据
                    this.content = res.data.blogContent;
                    const blog = {
                        title : res.data.blogTitle,
                        desc : res.data.blogTitle,
                        menuId: menuId
                    };
                    this.form.setFieldsValue(blog);
                });

            },
        },
        mounted: function () {
            window.console.log('mounted is running....');
            window.console.log(this.menuId);
            window.console.log(this.blogId);
            window.console.log(this.addFlag);
            getMenu().then(res => {
                //获取菜单数据
                this.treeData = this.transField(res.data);
            });
            if(this.addFlag === '0'){
                //修改模式查询博客详情
                if(this.menuId && this.blogId){
                    this.getBlogDetail(this.menuId, this.blogId);
                }
            }

        },

        beforeRouteUpdate (to, from, next) {
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`
            window.console.log('beforeRouteUpdate is running....');
            window.console.log(this.menuId);
            window.console.log(this.blogId);
            window.console.log(this.addFlag);
            getMenu().then(res => {
                //获取菜单数据
                this.treeData = this.transField(res.data);
            });
            if(this.addFlag === '0'){
                //修改模式查询博客详情
                if(this.menuId && this.blogId){
                    this.getBlogDetail(this.menuId, this.blogId);
                }
            }
            next();
        },

    }
</script>

<style scoped>
    .z-index-class{
        z-index: 1000!important;;
    }
</style>
