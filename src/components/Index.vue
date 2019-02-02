<template>
    <div>
        <el-row type="flex" justify="center" align="middle">
            <el-col :span="24"><div style="text-align: center;font-size: 20px;font-weight: bolder" class="grid-content bg-purple">婷的个人网站</div></el-col>
        </el-row>
        <el-row>
            <el-col justify="center" :span="24"><Header></Header></el-col>
        </el-row>
        <el-row>
            <el-col :span="18"><div style="height: 800px" class="grid-content bg-purple-light">main</div></el-col>
            <el-col :span="6"><div style="height: 800px" class="grid-content bg-purple">left</div></el-col>
        </el-row>
    </div>

</template>

<script>
    //import 组件时就算是同级目录也要加上./ 否则会找不到这个组件
    import Header from './Header.vue'
    export default {
        name: 'Index',
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                window.console.log(key, keyPath);
            }
        },
        components:{
            Header
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
</style>