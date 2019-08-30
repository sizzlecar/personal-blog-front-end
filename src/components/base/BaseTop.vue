<template>
    <div >
        <a-row type="flex">
            <a-col :span="3" :order="1" class="logo">
                <img alt="关致之" src="../../assets/wechat_logo.jpg" @click="go"  class="image"/>
            </a-col>
            <a-col :span="12" :order="2" class="search-box">
                <a-input-search
                    placeholder="请输入要查找的内容"
                    style="width: 200px; border-color: rgb(255, 255, 255)"
                    @search="onSearch"/>
            </a-col>
            <a-col :span="6" :order="3">
                <a-dropdown>
                    <a href="/blog">
                        赞助<a-icon type="down" />
                    </a>
                    <a-menu slot="overlay" @click="onClick">
                        <a-menu-item key="1">1st menu item</a-menu-item>
                        <a-menu-item key="2">2nd menu item</a-menu-item>
                        <a-menu-item key="3">3rd menu item</a-menu-item>
                    </a-menu>
                </a-dropdown>

            </a-col>
        </a-row>
    </div>
</template>

<script>
    export default {
        name: "BaseTop",
        data() {
            return {
                "description": "我是做网文相关培训的关致之。",
                "websiteName": "关致之的个人网站"
            };
        },
        methods: {
            go:function () {
                this.$router.push('/blog/personal-profile');
            },
            onSearch: function () {

            },
            onClick: function () {

            }
        },
        components: {}
    }
</script>

<style scoped>

    .site-title {
        font-size: 2.25rem;
        color: black !important;
        font-weight: bolder;
    }

    .site-description {
        color: #666;
        font-size: 0.8125rem;
        margin-bottom: 0;
    }

    .site-title:hover {
        text-decoration: underline;
    }
    .image{
        width: 45px;
        height: 45px;
    }
    .search-box {
        float: left;
        height: 22px;
        line-height: 22px;
        margin: 22px auto 0;
    }
    .logo {
        margin-top: 5px;
        margin-bottom: 5px;
        padding-left: 8px;
        border-right: 1px solid #ebedf0;
        line-height: 90%;
    }


</style>
