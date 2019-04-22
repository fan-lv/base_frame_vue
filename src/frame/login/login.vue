<template lang="pug">
    #login
        .login-content
            img(src="./images/loginBkg.png" alt="bg")
            .login-msg
                .msg-cont
                    .login-title {{title}}
                    .login-li
                        i.icon-username
                        input(type="text" placeholder="请输入用户名" v-model="usernameValue" readonly onfocus="this.removeAttribute('readonly');")
                    .login-li
                        i.icon-pwd
                        input(type="password" placeholder="请输入密码" v-model="passwordValue" readonly onfocus="this.removeAttribute('readonly');")
                    .login-li
                        i.icon-code
                        input(type="text" placeholder="请输入验证码" v-model="code" maxlength="4" style="width:50%" @blur="codeReg" @keyup.enter="login")
                        .code(@click="randomCode")
                            span.random-code(v-for="(item,index) in codeList" :key="index") {{item}}
                    .goregister
                        div
                            a-checkbox(v-model="rememberValue") 记住密码
                        div(@click="register") 立即注册
                    .btnLogin.btn-active(@click="login") 登录
        .login-footer Copyright©️2018 拓朴智能 All Rights Reserved
</template>
<script lang="ts">
    import {Vue, Component, Watch} from "vue-property-decorator";

    @Component({
        props: {
            title: {
                type: String,
                default: "UI视觉规范",
            },
            username: {
                type: String,
                default: "",
            },
            password: {
                type: String,
                default: "",
            },
            remember: {
                type: Boolean,
                default: false,
            },
        },
    })
    export default class Login extends Vue {
        codeList: any[] = []; // 验证码数组
        code: string = ""; // 验证码
        usernameValue: string = ""; // 用户名
        passwordValue: string = ""; // 密码
        rememberValue: boolean = false; // 记住密码

        @Watch("usernameValue")
        usernameValueChange(newValue: any, oldValue: any) {
            this.$emit("update:username", newValue);
        }

        @Watch("passwordValue")
        passwordValueChange(newValue: any, oldValue: any) {
            this.$emit("update:password", newValue);
        }

        @Watch("rememberValue")
        rememberValueChange(newValue: any, oldValue: any) {
            this.$emit("update:remember", newValue);
        }

        // 获取验证码随机
        randomCode() {
            this.codeList = [];
            for (let i = 0; i < 4; i++) {
                const num = Math.floor(Math.random() * 10);
                this.codeList.push(num);
            }
        }

        // 验证码校验
        codeReg() {
            const reg = /^[0-9]{4}$/;
            if (!reg.test(this.code)) {
                this.$message.error("验证码格式不正确");
            }
        }

        // 登录
        login() {
            if (!this.usernameValue) {
                this.$message.warning("请输入用户名");
                this.randomCode();
            } else if (!this.passwordValue) {
                this.$message.warning("请输入密码");
                this.randomCode();
            } else if (!this.code) {
                this.$message.warning("请输入验证码");
                this.randomCode();
            } else if (this.code !== this.codeList.join("")) {
                this.$message.error("验证码不正确");
                this.randomCode();
            } else {
                this.$emit("login");
            }
        }

        // 注册
        register() {
            this.$emit("register");
        }

        created() {
            localStorage.removeItem("loginMsg");
            this.randomCode();
            this.$emit("loadCreate");
        }
    }
</script>
<style lang="stylus" scoped>

    #login {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        min-width: 1000px;
        overflow-x: auto;
        background: #fff;
        color: #333;
        font-size: 14px;
    }

    .login-content {
        width: 827px;
        position: relative;

        .login-msg {
            width: 43%;
            height: 100%;
            position: absolute;
            right: 0;
            top: 0;
            padding: 9% 0;
        }

        .login-title {
            font-size: 20px;
            margin-bottom: 30px;
        }

        .login-li {
            width: 100%;
            border-bottom: 1px solid #D8D8D8;
            display: flex;
            height: 60px;
            align-items: center;

            input {
                border: 0;
                outline: 0;
                font-size: 14px;
                margin-left: 15px;
                flex: 1;
                height: 50px;
                line-height: 50px;
            }
        }
    }

    .login-content > img {
        height: 100%;
        width: 100%;
    }

    .msg-cont {
        width: 75%;
    }

    .icon-username {
        width: 21px;
        height: 22px;
        background: url(./images/username.png) no-repeat;
        background-size: 100% 100%;
    }

    .icon-phone {
        width: 21px;
        height: 25px;
        background: url(./images/phone.png) no-repeat;
        background-size: 100% 100%;
    }

    .icon-pwd {
        width: 23px;
        height: 24px;
        background: url(./images/pwd.png) no-repeat;
        background-size: 100% 100%;
    }

    .icon-code {
        width: 21px;
        height: 22px;
        background: url(./images/code.png) no-repeat;
        background-size: 100% 100%;
    }

    .code {
        width: 80px;
        height: 38px;
        background: url(./images/code_bg.jpg) no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .random-code {
        display: flex;
        flex: 1;
        color: #8e8e8e;
        font-size: 24px;
        justify-content: center;
    }

    .goregister {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        margin-bottom: 10px;
    }

    .goregister div:nth-child(1) {
        color: #999;
    }

    .goregister div:nth-child(2) {
        color: #3488FF;
        font-size: 12px;
        cursor: pointer;
    }

    .btnLogin {
        width: 60%;
        height: 40px;
        border-radius: 100px;
        background: #3488FF;
        color: #fff;
        font-size: 20px;
        text-align: center;
        line-height: 40px;
        margin: 0 auto;
        cursor: pointer;
    }

    .login-footer {
        font-size: 12px;
        color: #8c8c8c;
        text-align: center;
        position: absolute;
        bottom: 20px;
    }

</style>


