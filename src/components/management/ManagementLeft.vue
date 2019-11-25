<template>
    <div>
        <a-menu mode="inline"
                @click="click">
            <a-menu-item key="add-blog">
                <a-icon type="edit" />
                <span>写博客</span>
            </a-menu-item>
            <a-menu-item key="menu-management">
                <a-icon type="setting" />
                <span>菜单管理</span>
            </a-menu-item>
            <a-menu-item key="blog-management">
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
                if(e.key === "add-blog"){
                    this.$router.push({path: '/management/blog/add-blog'});
                }else if(e.key === "menu-management"){
                    this.$router.push({path: '/management/blog/menu'});
                }else if(e.key === "blog-management"){
                    this.$router.push({path: '/management/blog'});
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
