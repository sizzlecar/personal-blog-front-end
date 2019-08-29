<template>
    <div>
        <a-row type="flex">
            <a-col :span="3" :order="1">
                <span @click="go" style="color: black">{{websiteName}}</span>
            </a-col>
            <a-col :span="15" :order="2">
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


</style>
