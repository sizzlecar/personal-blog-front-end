<template>
    <div>
        <div v-for="(article, index) in articles" :key="index">
            <el-row>
                <el-col :span="24">
                    <div style="font-weight: bolder;font-size: larger" class="grid-content bg-purple">{{article.blogTitle}}</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple">{{article.blogContent}}</div>
                </el-col>
            </el-row>

        </div>
    </div>
</template>

<script>
    import {getBlogList} from '../common/request';
    export default {
        name: "ArticleList",
        props: {
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
                window.console.log('getBlogList is running');
                getBlogList(menuId).then(result => {
                    window.console.log(result.data);
                    this.articles = result.data;
                });

            }


        },
        created: function () {
            this.getBlogList(this.menuId);
        },
        mounted: function(){
            window.console.log(this.menuId);
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
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
</style>