<template>
    <el-menu style="position: relative;left: 30%;width: 40%" :default-active="activeIndex" mode="horizontal"
             @select="handleSelect">
        <el-menu-item index="1" @click="goIndexPage">首页</el-menu-item>
        <el-submenu index="2">
            <template slot="title">Java</template>
            <el-menu-item index="2-1">基础语法</el-menu-item>
            <el-menu-item index="2-2">高级特性</el-menu-item>
            <el-submenu index="2-4">
                <template slot="title">框架</template>
                <el-menu-item index="2-4-1">spring</el-menu-item>
                <el-menu-item index="2-4-2">mybatis</el-menu-item>
                <el-menu-item index="2-4-3">springBoot</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>docker</el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                activeIndex: '1',
            };

        },

        methods: {

            handleSelect: function () {

            },
            goIndexPage: function () {
                this.$router.push("/index/list");
            }


        }

    }
</script>

<style scoped>

</style>