<template>
    <div>
        <div>
            <a-card :loading="false" title="title">
                {{content}}
            </a-card>
        </div>


        <a-list v-if="comments.length"
                :dataSource="comments"
                :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`"
                itemLayout="horizontal">
            <a-list-item slot="renderItem" slot-scope="item,index">
                <a-comment
                        :author="item.author"
                        :avatar="item.avatar"
                        :content="item.blogComment"
                        :datetime="item.datetime">
                </a-comment>
            </a-list-item>
        </a-list>
        <a-comment>
            <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"/>
            <div slot="content">
                <a-form-item>
                    <a-textarea :rows="4" @change="handleChange" :value="value" ></a-textarea>
                </a-form-item>
                <a-form-item>
                    <a-button
                            htmlType="submit"
                            @click="handleSubmit"
                            type="primary">
                        Add Comment
                    </a-button>
                </a-form-item>
            </div>
        </a-comment>

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