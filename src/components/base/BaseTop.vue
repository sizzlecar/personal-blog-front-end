<template>
    <div class="top wrap">
        <h1 class="site-title">
            <span @click="go" style="color: black">{{websiteName}}</span>
        </h1>
        <p class="site-description">{{description}}</p>
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
            }
        },
        components: {}
    }
</script>

<style scoped>
    .top {
        height: 160px;
    }

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