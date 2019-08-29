<template>
    <div>
        <a-card >
            <img src="../assets/weixin.jpg" class="image">
            <div>
                <span class="font-style">{{personalProfileInfo}}</span>
            </div>
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
</style>