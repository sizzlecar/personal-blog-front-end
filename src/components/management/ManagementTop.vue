<template>
    <div>
        <a-row type="flex">
            <a-col :span="3" :order="1" class="logo">
                <img alt="关致之" src="../../assets/wechat_logo.jpg" class="image" @click="goPersonProfile"/>
            </a-col>
            <a-col :span="21" :order="2">
                <div style="float: right">
                    <a-dropdown>
                        <a-icon type="user" />
                        <a-menu slot="overlay" @click="onClick">
                            <a-menu-item key="1">注销登陆</a-menu-item>
                            <a-menu-item key="2">修改密码</a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </div>
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
            goPersonProfile: function () {
                window.console.log('点击了goPersonProfile');
                let params = {
                    imagePath: require("../../assets/weixin.jpg"),
                    title: "我是小说大魔王关致之",
                    description: "欢迎来到关致之的个人网站,请关注我的公共号了解更多。"
                };
                // 注意：如果提供了 path，params 会被忽略,你需要提供路由的 name 或手写完整的带有参数的 path：
                this.$router.push({path: '/blog/personal-profile', query: params});
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

    .input-box{
        width: 30%;
    }



</style>
