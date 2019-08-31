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
        props: {
            initImagePath: {
                type: String,
                default: ''
            },
            initTitle: {
                type: String,
                default: ''
            },
            initDescription: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                imagePath: this.initImagePath,
                title: this.initTitle,
                description: this.initDescription,

            };
        },
        methods:{

        },
        created: function () {
            window.console.log(this.imagePath);
        },

        beforeRouteEnter (to, from, next) {
            next(vm => {
                // 通过 `vm` 访问组件实例
                window.console.log(vm.$router);
            });
        },
        beforeRouteUpdate (to, from, next) {
            // just use `this`
            window.console.log(this.$router);
            next();
        },
        mounted() {
            window.console.log('i am change');

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
