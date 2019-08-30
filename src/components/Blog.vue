<template>
    <div >
        <a-layout>
            <a-layout-header class="header">
                <BaseTop></BaseTop>
            </a-layout-header>
            <a-layout class="main-wrapper">
                <a-layout-sider :class="scrollTop > 64 ? sider : ''">
                    <BaseLeft></BaseLeft>
                </a-layout-sider>
                <a-layout-content style="overflow: initial">
                    <router-view></router-view>
                </a-layout-content>
            </a-layout>
            <a-layout-footer style="text-align: center; clear: both">
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
                scrollTop: 0,
                sider: "side"
            };
        },
        methods: {

            handleScroll() {
                 this.scrollTop =
                    window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop;
            }

        },
        components: {
            BaseTop,
            BaseLeft
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll, true)
        },

        destroyed() {
            window.removeEventListener("scroll", this.handleScroll);
        }
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
    .side{
        position: fixed;
        top: 0px;
        left: 0px;
        width: 200px;
        z-index: 10;
        overflow: auto;
    }

    .clear {
        clear: both;
    }
    .clearfix :after {content:"."; display:block; height:0; visibility:hidden; clear:both; }

    .clearfix { *zoom:1; }




</style>
