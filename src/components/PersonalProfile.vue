<template>
    <div class="main-container">
        <a-card hoverable>
            <img alt="扫描二维码"
                 class="image"
                 src="../assets/weixin.jpg"
                 slot="cover" />
            <a-card-meta
                    title="关致之的公众号"
                    class="font-style">
                <template slot="description">{{personalProfileInfo}}</template>
            </a-card-meta>
        </a-card>
    </div>
</template>

<script>
    export default {
        name: "PersonalProfile",
        data() {
            return {
                personalProfileInfo: "欢迎来到关致之的个人网站,请关注我的公共号了解更多。",
            };
        },
    }
</script>

<style scoped>
    .font-style{
        font-size: larger;
        font-weight: bolder;
        color: red;
    }

    .main-container {
        padding: 0 300px 144px 64px;
        background: #fff;
        min-height: 500px;
        overflow: hidden;
        position: relative;
    }

    .image{
        width: 300px;
        height: 300px;

    }
</style>
