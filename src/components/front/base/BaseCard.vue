<template>
    <div class="main-container">
        <a-card hoverable>
            <img alt=""
                 class="image"
                 :src="imagePath"
                 slot="cover"/>
            <a-card-meta
                    :title="title"
                    class="font-style">
                <template slot="description">{{description}}</template>
            </a-card-meta>
        </a-card>
    </div>
</template>

<script>
    export default {
        name: "BaseCard",
        data() {
            return {
                imagePath: null,
                title: null,
                description: null,
            };
        },
        methods: {
            getImagePath: function () {
                return require(this.imagePath);
            }
        },
        created: function () {
            this.imagePath = require('../../../assets/weixin.jpg');
            this.title = '我是小说大魔王关致之';
            this.description = '欢迎来到关致之的个人网站,请关注我的公共号了解更多。';
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                // 通过 `vm` 访问组件实例
                if(to.query.imagePath){
                    vm.imagePath = to.query.imagePath;
                }
                if(to.query.title){
                    vm.title = to.query.title;
                }
                if(to.query.description){
                    vm.description = to.query.description;
                }
            });
        },
        beforeRouteUpdate(to, from, next) {
            // just use `this`
            this.imagePath = to.query.imagePath;
            this.title = to.query.title;
            this.description = to.query.description;
            next();
        },
        mounted() {
        }
    }
</script>

<style scoped>
    .font-style {
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

    .image {
        width: 300px;
        height: 300px;

    }
</style>
