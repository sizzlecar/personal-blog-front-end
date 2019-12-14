<template>
    <a-table
            :columns="columns"
            :dataSource="blog">
        <span slot="customTitle"><a-icon type="smile-o"/> Id</span>
    </a-table>
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
        },
        {
            title: '菜单',
            dataIndex: 'menuId',
            scopedSlots: {customRender: 'menuId'},
        },
        {
            title: '修改时间',
            dataIndex: 'updateTime',
        },
    ];

    import {managementGetBlogList} from '../../common/request';
    export default {
        name: "BlogManagement",
        data() {
            return {
                columns,
                blog: []
            };
        },
        methods:{
            getBlogList: function () {
                managementGetBlogList().then(res => {
                    this.blog = res.data.list.map(blog => {
                        blog.key = blog.id;
                        return blog;
                    });
                })
            }

        },
        created: function () {
            this.getBlogList();
        }
    }
</script>

<style scoped>

</style>
