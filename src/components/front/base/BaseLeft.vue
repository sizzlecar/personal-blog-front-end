<template>

    <!--<div :class="scrollTop > 64 ? sider : ''">
        <a-menu mode="inline"
                @click="click">
            <a-menu-item v-for="item in getMenuItems(this.menu, 0)"
                         :index="item.id.toString()"
                         :key="item.id"
                         :disabled="!item.active">{{item.name}}

            </a-menu-item>
            <a-sub-menu v-for="item in getSubMenuItems(this.menu, 0)"
                        :index="item.id.toString()"
                        :key="item.id"
                        :disabled="!item.active">
                <template slot="title">{{item.name}}</template>
                <a-menu-item v-for="subItem in getMenuItems(item.child, item.level + 1)"
                              :index="subItem.id.toString()"
                              :key="subItem.id"
                              :disabled="!subItem.active">
                    {{subItem.name}}
                </a-menu-item>
                <a-sub-menu v-for="subItem in getSubMenuItems(item.child, item.level + 1)"
                            :index="subItem.id.toString()"
                            :key="subItem.id"
                            :disabled="!subItem.active">
                    <template slot="title">{{subItem.name}}</template>
                    <a-menu-item v-for="subSubItem in getMenuItems(subItem.child, subItem.level + 1)"
                                  :index="subSubItem.id.toString()"
                                  :key="subSubItem.id"
                                  :disabled="!subSubItem.active">
                        {{subSubItem.name}}
                    </a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
        </a-menu>
        <a-back-top />
    </div>-->
    <div :class="scrollTop > 64 ? sider : ''">
        <a-tree
                @select="select"
                :treeData="menu">
        </a-tree>
    </div>


</template>

<script>
    import {getMenu} from '../../../common/request';
    export default {
        name: "BaseLeft",
        data() {
            return {
                activeIndex: '1',
                menu:[],
                rootPath: '/blog/article-list/',
                scrollTop: 0,
                sider: "side"
            };

        },

        computed:{

        },
        methods: {

            select: function (key, e) {
                if(e.selected) {
                    this.$router.push({path: this.rootPath + `${key}`});
                }
            },

            handleScroll() {
                this.scrollTop =
                    window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop;
            }

        },
        created: function () {
            getMenu().then(res => {
                //获取菜单数据
                this.menu = res.data;
            });
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
    .side{
        position: fixed;
        top: 0px;
        left: 0px;
        width: 200px;
        z-index: 10;
        overflow: auto;
    }
</style>
