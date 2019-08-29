<template>
    <div style="height: 800px" class="">
        <a-input-search
                placeholder="请输入内容"
                enterButton
                @search="onSearch">
        </a-input-search>
    </div>
</template>

<script>
    export default {
        name: "BaseLeft",
        methods: {
            onSearch (value) {
                window.console.log(value)
            },
        },
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