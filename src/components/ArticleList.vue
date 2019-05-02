<template>
    <div>
        <div v-for="(article, index) in articles" :key="index">
            <el-row>
                <el-col :span="24">
                    <div style="font-weight: bolder;font-size: larger" class="grid-content bg-purple">{{article.title}}</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple">{{article.content}}</div>
                </el-col>
            </el-row>

        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleList",
        data() {
            return {
                articles: [{
                    content: '文章1内容',
                    title: '文章1标题'
                },{
                    content: '文章2内容',
                    title: '文章2标题'
                },{
                    content: '文章3内容',
                    title: '文章3标题'
                },{
                    content: '文章4内容',
                    title: '文章4标题'
                }]
            };
        },
        created:function () {
            window.console.log('ArticleList component I am running')
        },
        beforeRouteUpdate (to, from, next) {
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`
            window.console.log('ArticleList beforeRouteUpdate component I am running')
        },
    }
</script>

<style scoped>
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
</style>