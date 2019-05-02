<template>
    <div class="grid-content bg-purple top">{{topTitle}}</div>
</template>

<script>
    export default {
        name: "BaseTop",
        data() {
            return {
                "topTitle": "一切都是最好的安排 --关致之"
            };
        },
        methods: {

        },
        components:{
        }
    }
</script>

<style scoped>
    .top{
        text-align: center;
        font-size: 20px;
        font-weight: bolder
    }


</style>