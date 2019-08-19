<template>
    <el-collapse>
        <el-collapse-item v-for="(article, index) in articles"
             :key="index" :title="article.blogTitle">


            <div>
                {{article.blogContent}}
            </div>
            <div>
                <el-link @click="jumpBlogDetail(article.id)" type="primary">继续阅读</el-link>
            </div>

            <!--<el-row>
                <el-col :span="24">
                    <h3 class="entry-title">
                        <a @click="jumpBlogDetail(article.id)">{{article.blogTitle}}</a>
                    </h3>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <p class="">{{article.blogContent}}</p>
                    <p>
                        <el-link @click="jumpBlogDetail(article.id)" type="primary">继续阅读</el-link>
                    </p>
                </el-col>
            </el-row>-->
        </el-collapse-item>
    </el-collapse>
</template>

<script>
    import {getBlogList} from '../common/request';
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
                articles: []
            };
        },
        methods: {
            // 获取blog list
            getBlogList: function (menuId) {
                getBlogList(menuId).then(result => {
                    this.articles = result.data;
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
</style>