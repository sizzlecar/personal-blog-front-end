<template>
    <div class="wrap">
        <el-menu :default-active="activeIndex"
                 mode="horizontal"
                 :router="false"
                 @select="handleSelect">
            <el-menu-item v-for="item in getMenuItems(this.menu, 0)"
                          :index="item.id.toString()"
                          :key="item.id"
                          :disabled="!item.active">{{item.name}}
            </el-menu-item>
            <el-submenu v-for="item in getSubMenuItems(this.menu, 0)"
                        :index="item.id.toString()"
                        :key="item.id"
                        :disabled="!item.active">
                <template slot="title">{{item.name}}</template>
                <el-menu-item v-for="subItem in getMenuItems(item.child, item.level + 1)"
                              :index="subItem.id.toString()"
                              :key="subItem.id"
                              :disabled="!subItem.active">
                    {{subItem.name}}
                </el-menu-item>
                <el-submenu v-for="subItem in getSubMenuItems(item.child, item.level + 1)"
                            :index="subItem.id.toString()"
                            :key="subItem.id"
                            :disabled="!subItem.active">
                    <template slot="title">{{subItem.name}}</template>
                    <el-menu-item v-for="subSubItem in getMenuItems(subItem.child, subItem.level + 1)"
                                  :index="subSubItem.id.toString()"
                                  :key="subSubItem.id"
                                  :disabled="!subSubItem.active">
                        {{subSubItem.name}}
                    </el-menu-item>
                </el-submenu>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    import {getMenu} from '../../../common/request';
    export default {
        name: "Header",
        data() {
            return {
                activeIndex: '1',
                menu:[],
                rootPath: '/blog/article-list/'
            };

        },

        computed:{

        },
        methods: {

            handleSelect: function (index) {
                //window.console.log(index);
                this.$router.push({path: this.rootPath + `${index}`});
            },
            getMenuItems: function (menuArray, level) {
                const menuItems = [];
                menuArray.forEach(item =>{
                    if(item.child.length === 0 && item.level === level){
                        //没有子类的的第一级菜单
                        menuItems.push(item);
                    }
                });
                return menuItems;
            },
            getSubMenuItems: function (menuArray, level) {
                const subMenuItems = [];
                menuArray.forEach(item =>{
                    if(item.child.length !== 0 && item.level === level){
                        //有子菜单的第一级菜单
                        subMenuItems.push(item);
                    }
                });
                return subMenuItems;
            }

        },
        created: function () {
            getMenu().then(res => {
                //获取菜单数据
                this.menu = res.data;
            });
        }

    }
</script>

<style scoped>

</style>
