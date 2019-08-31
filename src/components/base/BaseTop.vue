<template>
    <div >
        <a-row type="flex">
            <a-col :span="3" :order="1" class="logo">
                <img alt="关致之" src="../../assets/wechat_logo.jpg" @click="goPersonProfile"  class="image"/>
            </a-col>
            <a-col :span="12" :order="2" class="search-box">
                <a-input-search
                    placeholder="请输入要查找的内容"
                    style="width: 200px; border-color: rgb(255, 255, 255)"
                    @search="onSearch"/>
            </a-col>
            <a-col :span="6" :order="3">
                <a-menu mode="horizontal"
                        style="width: 35%"
                        @click="goSponsor">
                    <a-menu-item key="sponsor">
                        支持我们
                    </a-menu-item>
                </a-menu>

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
                    imagePath : "../../assets/weixin.jpg",
                    title : "我是小说大魔王关致之",
                    description: "欢迎来到关致之的个人网站,请关注我的公共号了解更多。"
                };
                // 注意：如果提供了 path，params 会被忽略,你需要提供路由的 name 或手写完整的带有参数的 path：
                this.$router.push({name: 'BaseCard', params: params});
            },

            onSearch: function () {

            },

            onClick: function () {
            },

            goSponsor: function (e) {
                window.console.log('点击了goSponsor');
                window.console.log('e');
                if(e.key === 'sponsor'){
                    window.console.log('===');
                    let params = {
                        imagePath : "../../assets/collect_money.jpg",
                        title : "赞助我的网站持续输出",
                        description: "如果本网站给你带来了帮助，你可以用捐助来表示你的谢意 —— 就好像偶尔给我买杯咖啡 :)"
                    };
                    this.$router.push({name: 'BaseCard', params: params});

                }
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
