<template>

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
            },

            transField(allMenu) {
                const result = [];
                for (const menu of allMenu) {
                    const res = {};
                    res.key = menu.id;
                    res.title = menu.name;
                    res.level = menu.level;
                    res.scopedSlots = {
                        title: 'operationSlot',
                    };
                    res.parentId = 0;
                    if (menu.children) {
                        res.children = this.transField(menu.children);
                        for (const children of res.children) {
                            children.parentId = res.key;
                        }

                    }
                    result.push(res);
                }
                return result;
            }

        },
        created: function () {
            getMenu().then(res => {
                //获取菜单数据
                this.menu = this.transField(res.data);
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
