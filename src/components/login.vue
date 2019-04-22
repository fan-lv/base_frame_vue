<template lang="pug">
    Login(:title="title" :username.sync="username" :password.sync="password" :remember.sync="remember" @loadCreate="loadCreate" @login="login" @register="register")
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import Login from "@/frame/login/login.vue";

    @Component({
        components: {
            Login,
        },
    })
    export default class LoginComponent extends Vue {
        title: string = "UI视觉规范-演示";
        username: string = ""; // 用户名
        password: string = ""; // 密码
        remember: boolean = false; // 记住密码

        loadCreate() {
            this.$message.info("登陆组件加载了，可在 component/login.vue 中定制需要填充的用户名密码");
        }

        login() {
            this.$router.push("/");
        }

        register() {
            this.$message.info("注册模块");
        }
    }
</script>

<style lang="stylus" scoped>

</style>
