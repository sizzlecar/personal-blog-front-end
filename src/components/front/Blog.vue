<template>
    <div>
        <a-layout>
            <a-layout-header class="header">
                <BaseTop></BaseTop>
            </a-layout-header>
            <a-layout class="main-wrapper">
                <a-layout-sider >
                    <BaseLeft></BaseLeft>
                </a-layout-sider>
                <a-layout-content>
                    <router-view></router-view>
                </a-layout-content>
            </a-layout>
            <a-layout-footer style="text-align: center;">
                关致之的个人网站 ©2019 Created by carl
            </a-layout-footer>
        </a-layout>
    </div>
</template>

<script>
    //import 组件时就算是同级目录也要加上./ 否则会找不到这个组件
    import BaseTop from './base/BaseTop.vue';
    import BaseLeft from "./base/BaseLeft";

    export default {
        name: 'Blog',
        data() {
            return {

            };
        },

        components: {
            BaseTop,
            BaseLeft
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

    }





</style>
