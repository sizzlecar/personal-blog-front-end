<template>
    <div>
        <a-menu mode="inline"
                @click="click">
            <a-menu-item key="1">
                <a-icon type="edit" />
                <span>写博客</span>
            </a-menu-item>
            <a-menu-item key="2">
                <a-icon type="setting" />
                <span>菜单管理</span>
            </a-menu-item>
            <a-menu-item key="3">
                <a-icon type="form" />
                <span>博客管理</span>
            </a-menu-item>
            <a-menu-item key="4">
                <a-icon type="usergroup-add" />
                <span>用户管理</span>
            </a-menu-item>
        </a-menu>
        <a-back-top />
    </div>

</template>

<script>
    export default {
        name: "BaseLeft",
        data() {
            return {
                menu:[],
            };

        },

        computed:{

        },
        methods: {

            click: function (e) {
                window.console.log(e);
                if(e.key == 1){
                    this.$router.push({path: '/management/blog/add-blog'});
                }
            }
        },
        created: function () {

        }
    }
</script>

<style scoped>
    .side{
        position: fixed;
        top: 0px;
        left: 0px;
        width: 200px;
        z-index: 10;
        overflow: auto;
    }
</style>
