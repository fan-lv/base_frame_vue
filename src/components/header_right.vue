<template lang="pug">
    .header-right
        .header-right-item.header-user-info
            img.header-avatar(src="@/assets/logo.png" alt="avatar")
            span.header-user-name 吕小布
            a-icon(type="caret-down")
            .header-user-container
                .self-info-top
                    | 账号信息
                    a 账号设置 >
                .self-info 所属部门：UI基础平台
                .self-info 本次登录：{{nowTime}}
                .self-info 登录地区：杭州市(IP:0.0.0.0)
                .self-info 上次登录：{{nowTime}}
        .header-right-item
            a-icon(type="home")
        .header-right-item
            a-icon(type="message")
        .header-right-item
            a-icon(type="logout" title="登出" @click="logout")
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class HeaderRight extends Vue {
        nowTime: string = "";

        mounted() {
            const date = new Date();
            const year = date.getFullYear();
            const month = (date.getMonth() + 1) > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
            const day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
            const hour = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
            const min = date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
            const sec = date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
            this.nowTime = `${year}/${month}/${day} ${hour}:${min}:${sec}`;
        }

        logout() {
            this.$router.push("/login");
        }
    }
</script>

<style lang="stylus" scoped>
    .header-right {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family: PingFang-SC-Medium;
        font-size: 14px;
        color: #333333;

        .header-user-info {
            position: relative;

            &:hover {
                box-shadow: 0 0 10px rgba(112, 127, 135, .15);

                .header-user-container {
                    display: block;
                }
            }

            .header-avatar {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background: #eeeeee;
            }

            .header-user-name {
                margin: 0 16px 0 14px;
                color: rgb(38, 38, 38);
            }

            i {
                color: #bfbfbf;
            }

            .header-user-container {
                display: none;
                position: absolute;
                top: 49px;
                left: 0;
                padding: 16px;
                width: 252px;
                box-shadow: 0 0 10px rgba(112, 127, 135, .15);
                background: #fff;
                border-radius: 0 0 2px 2px;
                font-size: 12px;

                .self-info-top {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    height: 30px;
                    line-height: 30px;
                    margin-bottom: 8px;
                    color: #262626;
                }

                .self-info {
                    height: 30px;
                    line-height: 30px;
                    color: #595959;
                }
            }
        }

        .header-right-item {
            position: relative;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0 30px;
            height: 50px;
            cursor: pointer;

            &:not(:last-child)::after {
                content: '';
                position: absolute;
                top: 12px;
                right: -1px;
                height: 24px;
                border-right: 1px solid #EDEDED;
            }

            i {
                font-size: 20px;
            }
        }
    }
</style>
