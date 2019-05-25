<template>
    <div>
        <el-row class="site-branding">
            <el-col :span="24">
                <BaseTop></BaseTop>
            </el-col>
        </el-row>
        <el-row class="navigation-top">
            <el-col justify="center" :span="24">
                <BaseHeader></BaseHeader>
            </el-col>
        </el-row>
        <el-row class="site-content">
            <div class="wrap">
                <el-col :span="18">
                    <router-view></router-view>
                </el-col>
                <el-col :span="6">
                    <BaseRight></BaseRight>
                </el-col>
            </div>
        </el-row>
    </div>

</template>

<script>
    //import 组件时就算是同级目录也要加上./ 否则会找不到这个组件
    import BaseHeader from './base/BaseHeader.vue';
    import BaseTop from './base/BaseTop.vue';
    import BaseRight from "./base/BaseRight";

    export default {
        name: 'Blog',
        data() {
            return {};
        },
        methods: {},
        components: {
            BaseRight,
            BaseHeader,
            BaseTop
        }
    }
</script>

<style scoped>
    .wrap {
        margin-left: auto;
        margin-right: auto;
        max-width: 900px;
        padding-left: 2em;
        padding-right: 2em;
    }

    .navigation-top {
        background: #fff;
        border-bottom: 1px solid #eee;
        border-top: 1px solid #eee;
        position: relative;
    }

    .site-branding {
        background-color: #fafafa;
    }

    .site-content {
        padding: 5.5em 0 0;
    }

</style>