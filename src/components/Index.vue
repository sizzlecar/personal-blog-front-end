<template>
    <el-container class="main-container">
        <el-header>
            <Header></Header>
        </el-header>
        <el-container>
            <el-aside>Aside</el-aside>
            <el-container>
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>

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
    .main-container {
        width: 100%;
        height: 100%;
    }

    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
</style>