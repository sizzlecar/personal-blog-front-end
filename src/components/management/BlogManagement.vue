<template>
    <a-card title="博客管理">
        <div>
            <a-input placeholder="标题或简介"  v-model="searchModel.searchKey" style="width: 30%"/>
            &nbsp;&nbsp;
            <a-tree-select
                    style="width: 30%"
                    showSearch
                    placeholder="菜单"
                    allowClear
                    treeDefaultExpandAll
                    v-model="searchModel.menuId"
                    :treeData="treeData">
            </a-tree-select>
            &nbsp;&nbsp;
            <a-button type="primary" @click="search">查询</a-button>
        </div>

        <a-divider ></a-divider>
        <a-table
                :columns="columns"
                :dataSource="blog"
                :pagination="pagination">
            <span slot="customTitle"><a-icon type="smile-o"/> Id</span>
        </a-table>
    </a-card>

</template>

<script>
    const columns = [
        {
            dataIndex: 'id',
            slots: {title: 'customTitle'},
            scopedSlots: {customRender: 'id'},
        },
        {
            title: '标题',
            dataIndex: 'title',
        },
        {
            title: '简介',
            dataIndex: 'blogDesc',
            width: '30%'
        },
        {
            title: '菜单',
            dataIndex: 'blogMenu.name',
            scopedSlots: {customRender: 'menuId'},
        },
        {
            title: '修改时间',
            dataIndex: 'updateTime',
        },
    ];

    import {managementGetBlogList, getMenu} from '../../common/request';
    export default {
        name: "BlogManagement",
        data() {
            return {
                columns,
                blog: [],
                pagination: {
                    onChange: (pageNo, pageSize) => {
                        this.getBlogList(pageNo, pageSize);
                    },
                    pageSize: 5,
                    total: 0,
                    showTotal: total => `共 ${total} 条数据`
                },
                noData: {
                    emptyText:  "暂无数据"
                },
                treeData: [],
                searchModel: {
                    "menuId": null,
                    "searchKey": null
                }
            };
        },
        methods:{
            getBlogList: function (pageNo = 1, pageSize = 10) {
                const blog = {};
                if(this.searchModel.menuId){
                    blog.menuId = this.searchModel.menuId;
                }
                if(this.searchModel.searchKey){
                    blog.searchKey = this.searchModel.searchKey;
                }
                blog.pageNo = (pageNo - 1) * pageSize;
                blog.pageSize = pageSize;
                managementGetBlogList(blog).then(res => {
                    this.pagination.total = res.data.total;
                    this.blog = res.data.list.map(blog => {
                        blog.key = blog.id;
                        return blog;
                    });
                })
            },
            transField(allMenu) {
                const result = [];
                for (const menu of allMenu) {
                    const res = {};
                    res.value = String(menu.id);
                    res.label = menu.name;
                    res.parentId = 0;
                    if (menu.children) {
                        res.children = this.transField(menu.children);
                        for (const children of res.children) {
                            children.parentId = res.value;
                        }

                    }
                    result.push(res);
                }
                return result;
            },

            getMenuTree: function () {
                getMenu().then(res => {
                    //获取菜单数据
                    this.treeData = this.transField(res.data);
                });
            },

            search: function () {
                this.getBlogList();
            }

        },
        created: function () {
            this.getBlogList();
            this.getMenuTree();
        }
    }
</script>

<style scoped>

</style>
