<template>
    <div>
        <!--标题-->
        <el-row>
            <el-col :span="24">
                <h1 class="">
                    {{title}}
                </h1>
            </el-col>
        </el-row>
        <!--内容-->
        <el-row>
            <el-col :span="24">
                <div class="">
                    {{content}}
                </div>
            </el-col>
        </el-row>
        <!--评论-->
        <el-row>
            <el-col :span="24">
                <div v-for="comment in comments"
                     :key="comment.id">
                    {{comment.blogComment}}
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    import {getBlogDetail} from '../common/request';
    export default {
        name: "ArticleDetail",
        props: {
            menuId: {
                type: String,
                default: '0'
            },
            blogId: {
                type: String,
                default: '0'
            }
        },
        components: {},
        data() {
            return {
                content: '',
                title: '',
                comments:[]//评论
            };
        },
        methods: {


            /**
             * 获取博客详情
             * @param menuId
             * @param blogId
             */
            getBlogDetail: function (menuId, blogId) {
                getBlogDetail(menuId, blogId).then(res => {
                    //获取菜单数据
                    window.console.log(res);
                    this.content = res.data.blogContent;
                    this.title = res.data.blogTitle;
                    this.comments = res.data.blogComments;
                });

            }

        },
        created:function () {
            this.getBlogDetail(this.menuId, this.blogId);
        },
        mounted: function(){
        },
        beforeRouteUpdate (to, from, next) {
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`

            this.getBlogDetail(to.params.menuId, to.params.blogId);
            next();
        },
    }
</script>

<style scoped>

</style>