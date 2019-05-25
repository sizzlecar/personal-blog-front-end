<template>
    <div style="height: 800px" class="">
        <el-input
                placeholder="请输入内容"
                v-model="input4">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
    </div>
</template>

<script>
    export default {
        name: "BaseLeft"
    }
</script>

<style scoped>

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .bg-purple {
        background: #d3dce6;
    }

</style>