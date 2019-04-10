<template lang="pug">
    header.layout-header-bar
        .header-title
            Breadcrumb(:style="{background: '#fff'}")
                BreadcrumbItem(v-for="(item, index) in breadCrumb" :key="index" :to="item.to") {{item.label}}
        .header-right
            .header-right-item.header-user-info
                img.header-avatar(src="@/assets/logo.png" alt="avatar")
                span.header-user-name 吕小布
                Icon(type="md-arrow-dropdown")
                .header-user-container
                    | 123
            .header-right-item
                Icon(type="ios-home")
            .header-right-item
                Icon(type="ios-text")
            .header-right-item
                Icon(type="ios-log-out")
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component({
        props: {
            breadCrumb: {
                type: Array,
                default() {
                    return [];
                },
            },
        },
    })
    export default class MyHeader extends Vue {

    }
</script>

<style scoped lang="stylus">
    .layout-header-bar {
        display: flex;
        flex-direction row;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        line-height 50px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);

        .header-title {
            margin-left 30px;
            font-family: PingFang-SC-Medium;
            font-size: 12px;
            color: #262626;
        }

        .header-right {
            display: flex;
            flex-direction: row;
            align-items: center;
            font-family: PingFang-SC-Medium;
            font-size: 14px;
            color: #333333;

            .header-user-info {
                display: flex;
                flex-direction: row;
                align-items: center;
                position: relative;

                &:hover {
                    box-shadow: 0 0 10px rgba(112, 127, 135, .15);

                    .header-user-container {
                        display: block;
                    }
                }

                .header-avatar {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                }

                .header-user-name {
                    margin: 0 16px 0 14px;
                }

                .header-user-container {
                    display: none;
                    position: absolute;
                    top: 50px;
                    left: 0;
                    width: 252px;
                    box-shadow: 0 0 10px rgba(112, 127, 135, .15);
                    background: #fff;
                    border-radius: 0 0 2px 2px;
                }
            }

            .header-right-item {
                position: relative;
                padding 0 30px;
                height 50px;
                cursor: pointer;

                &:not(:last-child)::after {
                    content: '';
                    position: absolute;
                    top: 12px;
                    right -1px;
                    height 24px;
                    border-right: 1px solid #EDEDED;
                }

                i {
                    font-size: 20px;
                }
            }
        }
    }
</style>
