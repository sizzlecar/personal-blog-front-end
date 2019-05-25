<template>
    <div>
        <p class="font-style">
            {{personalProfileInfo}}
        </p>
        <div>
            <img src="../assets/weixin.jpg" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "PersonalProfile",
        data() {
            return {
                personalProfileInfo: "欢迎来到关致之的个人网站,请关注我的公共号了解更多。",
                QRcodePath: ""

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
</style>