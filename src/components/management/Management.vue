<template>
    <a-layout>
        <a-layout-header class="header">
            <ManagementTop></ManagementTop>
        </a-layout-header>
        <a-layout class="main-wrapper">
            <a-layout-sider>
                <ManagementLeft></ManagementLeft>
            </a-layout-sider>
            <a-layout-content>
                <router-view></router-view>
            </a-layout-content>
            <div class="push"></div>
        </a-layout>
        <a-layout-footer class="footer">
            关致之的个人网站 ©2019 Created by carl
        </a-layout-footer>
    </a-layout>
</template>

<script>
    import ManagementLeft from './ManagementLeft';
    import ManagementTop from "./ManagementTop";

    export default {
        name: "Management",

        components: {
            ManagementLeft,
            ManagementTop
        },
    }
</script>

<style scoped>
    .header {
        box-shadow: 0 2px 8px #f0f1f2;
        position: relative;
        z-index: 10;
        max-width: 100%;
    }

    .main-wrapper {
        background: #fff;
        padding: 40px 0 0;
        position: relative;
        min-height: 800px;
        margin-bottom: -21px;
    }

    .footer{
        text-align: center;
    }
    .push{
        height: 21px;
    }
</style>
