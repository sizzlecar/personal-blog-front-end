<template>
    <div >
        <el-row>
            <el-col :span="24">
                <div style="font-weight: bolder;font-size: larger" class="grid-content bg-purple">{{title}}</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple">{{content}}</div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "Article",
        props: {
            title: String,
            content: String

        }
    }
</script>

<style scoped>
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
</style>