<template>
    <div>
        <!--标题-->
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    {{title}}
                </div>
            </el-col>
        </el-row>
        <!--内容-->
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    {{content}}
                </div>
            </el-col>
        </el-row>
        <!--评论-->
        <el-row>
            <el-col :span="24">
                <div v-for="(comment, index) in comments"
                     :key="index">
                    {{comment}}
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>

    export default {
        name: "ArticleDetail",
        components: {},
        data() {
            return {
                content: '文章内容',
                title: '文章标题',
                comments:['第一条评论','第二条评论','第三条评论', '第四条评论']//评论
        };

        },
        created:function () {
            window.console.log('ArticleDetail created component I am running')
        },
        mounted: function(){
            window.console.log('ArticleDetail mounted component I am running')
        },
        beforeRouteUpdate (to, from, next) {
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`
            window.console.log('ArticleDetail beforeRouteUpdate component I am running')
        },
    }
</script>

<style scoped>
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
</style>