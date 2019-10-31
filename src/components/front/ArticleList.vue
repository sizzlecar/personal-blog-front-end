<template>
    <div class="main-container">
        <a-list
                itemLayout="vertical"
                size="large"
                :pagination="pagination"
                :dataSource="articles"
                :locale="noData">
            <a-list-item slot="renderItem" slot-scope="item" key="item.id">
                <a-list-item-meta :description="item.blogDesc">
                    <template slot="title">
                        <div @click="()=> jumpBlogDetail(item.id)">{{item.title}}</div>
                    </template>
                </a-list-item-meta>
            </a-list-item>>
        </a-list>
    </div>
</template>

<script>
    import {getBlogList} from '../../common/request';
    export default {
        name: "ArticleList",
        props: {
            //组件内部不能修改 props
            // 父组件修改 props  -> 子组件更新
            menuId: {
                type: String,
                default: '0'
            }
        },
        data() {
            return {
                articles: [],
                pagination: {
                    onChange: (pageNo, pageSize) => {
                        this.getBlogList(this.menuId, pageNo, pageSize);
                    },
                    pageSize: 5,
                    total: 0,
                    showTotal: total => `共 ${total} 条数据`
                },
                noData: {
                   emptyText:  "暂无数据"
                }
            };
        },
        methods: {
            // 获取blog list
            getBlogList: function (menuId,pageNo = 1, pageSize = 10) {
                const blog = {};
                blog.menuId = menuId;
                blog.pageNo = (pageNo - 1) * pageSize;
                blog.pageSize = pageSize;
                getBlogList(blog).then(result => {
                    this.articles = result.data.list;
                    this.pagination.total = result.data.total;
                });
            },
            //获取文章详情
            jumpBlogDetail: function (blogId) {
                this.$router.push({path: '/blog/article-detail/' + `${this.menuId}`+ "/" + `${blogId}`});
            }


        },
        created: function () {
            this.getBlogList(this.menuId);
        },
        mounted: function(){
        },
        beforeRouteUpdate (to, from, next) {
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`

            //重新加载文章列表
            this.getBlogList(to.params.menuId);
            next();
        },
    }
</script>

<style scoped>
    .entry-title{
        font-size: x-large;
    }
    .code-box{
        margin: 0 0 16px;
    }

    .main-container {
        padding: 0 300px 144px 64px;
        background: #fff;
        min-height: 500px;
        overflow: hidden;
        position: relative;
    }
</style>
