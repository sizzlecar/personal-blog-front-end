<template>
    <div>
        <el-row type="flex" justify="center" align="middle">
            <el-col :span="24">
                <BaseTop></BaseTop>
            </el-col>
        </el-row>
        <el-row>
            <el-col justify="center" :span="24"><BaseHeader></BaseHeader></el-col>
        </el-row>
        <el-row>
            <el-col :span="18">
                <router-view></router-view>
            </el-col>
            <el-col :span="6"><BaseLeft></BaseLeft></el-col>
        </el-row>
    </div>

</template>

<script>
    //import 组件时就算是同级目录也要加上./ 否则会找不到这个组件
    import BaseHeader from './base/BaseHeader.vue';
    import BaseTop from './base/BaseTop.vue';
    import BaseLeft from "./base/BaseLeft";
    export default {
        name: 'Blog',
        data() {
            return {

            };
        },
        methods: {
            handleSelect(key, keyPath) {
            }
        },
        components:{
            BaseLeft,
            BaseHeader,
            BaseTop
        }
    }
</script>

<style scoped>
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .suspension {
        position: fixed;
        z-index: 9;
    }

</style>