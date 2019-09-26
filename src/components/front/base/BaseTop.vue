<template>
    <div>
        <a-row type="flex">
            <a-col :span="3" :order="1" class="logo">
                <img alt="关致之" src="../../../assets/wechat_logo.jpg" @click="goPersonProfile" class="image"/>
            </a-col>
            <a-col :span="12" :order="2" class="search-box">
                <a-input-search
                        placeholder="请输入要查找的内容"
                        class="input-box"
                        @search="onSearch"></a-input-search>
            </a-col>
            <a-col :span="6" :order="3">
                <a-menu mode="horizontal"
                        style="width: 35%"
                        @click="goSponsor">
                    <a-menu-item key="sponsor">
                        支持我们
                    </a-menu-item>
                    <a-menu-item key="login">
                        登陆
                    </a-menu-item>
                </a-menu>

            </a-col>
        </a-row>
        <a-modal
                title="登陆"
                :visible="visible"
                :footer="null"
                @cancel="handleCancel">
            <a-form
                    id="components-form-demo-normal-login"
                    :form="form"
                    class="login-form"
                    @submit="handleSubmit">
                <a-form-item>
                    <a-input
                            v-decorator="['account', { rules: [{ required: true, message: '请输入账号' }] }]"
                            placeholder="账号">
                        <a-icon
                                slot="prefix"
                                type="user"
                                style="color: rgba(0,0,0,.25)"
                        />
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input
                            v-decorator="['password',{ rules: [{ required: true, message: '请输入密码' }] }]"
                            type="password"
                            placeholder="密码"
                    >
                        <a-icon
                                slot="prefix"
                                type="lock"
                                style="color: rgba(0,0,0,.25)"
                        />
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-checkbox
                            v-decorator="['remember',{valuePropName: 'checked',initialValue: true,}]">
                        记住我
                    </a-checkbox>
                    <a class="login-form-forgot"
                            href="">
                        忘记密码
                    </a>
                    <a-button
                            type="primary"
                            html-type="submit"
                            class="login-form-button"
                    >
                        登陆
                    </a-button>
                    或 <a href="">
                    注册
                </a>
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>

<script>
    import {login,setToken} from '../../../common/request';
    export default {
        name: "BaseTop",
        data() {
            return {
                "description": "我是做网文相关培训的关致之。",
                "websiteName": "关致之的个人网站",
                "visible": false,
                "confirmLoading": true

            };
        },
        methods: {
            goPersonProfile: function () {
                window.console.log('点击了goPersonProfile');
                let params = {
                    imagePath: require("../../../assets/weixin.jpg"),
                    title: "我是小说大魔王关致之",
                    description: "欢迎来到关致之的个人网站,请关注我的公共号了解更多。"
                };
                // 注意：如果提供了 path，params 会被忽略,你需要提供路由的 name 或手写完整的带有参数的 path：
                this.$router.push({path: '/blog/personal-profile', query: params});
            },

            onSearch: function () {

            },

            onClick: function () {
            },

            goSponsor: function (e) {
                if (e.key === 'sponsor') {
                    let params = {
                        imagePath: require("../../../assets/collect_money.jpg"),
                        title: "赞助我的网站持续输出",
                        description: "如果本网站给你带来了帮助，你可以用捐助来表示你的谢意 —— 就好像偶尔给我买杯咖啡 :)"
                    };
                    this.$router.push({path: '/blog/personal-profile', query: params});

                } else if (e.key === 'login') {
                    //弹出
                    this.visible = true;



                }
            },
            handleCancel: function () {
                this.visible = false;
                this.form.setFieldsValue({"account" : null, "password" : null});
            },
            handleSubmit: function (e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        window.console.log('Received values of form: ', values);
                        login(values).then(res => {
                            if(res.data.code !== "0"){
                                this.$message.error(res.data.message);
                            }else {
                                this.$message.success(res.data.message);
                                this.visible = false;//关闭登陆模态框
                                //保存token
                                window.localStorage.setItem("token", res.data.data.token);
                                setToken();
                                this.$router.push({path: '/management'});
                            }
                        })
                    }
                });
            }
        },
        beforeCreate () {
            this.form = this.$form.createForm(this);
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

    .image {
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

    .input-box {
        width: 30%;
    }


</style>
