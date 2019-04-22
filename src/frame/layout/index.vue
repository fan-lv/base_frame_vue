<template lang="pug">
    #layout
        .frame-layout-sider(:style="{width: secondMenus.length>0?'200px':'100px'}")
            .first-menus
                img.avatar-logo(src="../../assets/logo.png" alt="logo")
                ul.menu-list
                    li.menu-item(v-for="(menu, index) in menus" :key="index" :class="{selected: index === menuSelectedIndex}" @click="menuChange(menu, index)")
                        a-icon(:type="menu.icon")
                        span.menu-item-text {{menu.label}}
            .second-menus(v-show="secondMenus.length>0")
                span.second-menus-title {{subTitle}}
                ul.menu-list
                    li.menu-item(v-for="(menu, index) in secondMenus" :key="index" :class="{selected: index === secondMenuSelectedIndex}" @click="secondMenuChange(menu, index)")
                        span.menu-item-text {{menu.label}}
        header(:class="secondMenus.length>0?'has-second':''" :style="{left: secondMenus.length>0?'200px':'100px'}")
            ul.menu-list(v-if="thirdMenus.length>0")
                li.menu-item(v-for="(menu, index) in thirdMenus" :key="index" :class="{selected: index === thirdMenuSelectedIndex}" @click="thirdMenuChange(menu, index)")
                    span.menu-item-text {{menu.label}}
            .menu-block(v-else)
            HeaderRight
        .frame-container(:style="{marginLeft: secondMenus.length>0?'200px':'100px'}")
            .frame-content
                router-view
            footer Copyright©️2018 拓朴智能 All Rights Reserved
</template>

<script lang="ts">
    import {Vue, Component, Watch} from "vue-property-decorator";
    import {sessionMenus} from "@/check_session";
    import HeaderRight from "@/components/header_right.vue";

    @Component({
        components: {
            HeaderRight,
        },
    })
    export default class MyLayout extends Vue {
        // 菜单数组
        menus: any[] = sessionMenus.menus;
        // 一级菜单选中的索引
        menuSelectedIndex: number = 0;
        // 一级菜单选中的路由
        menuSelectRouter: string = "";
        // 如果有二级菜单，选中时候显示在二级菜单顶部的文字
        subTitle: string = "";
        // 二级菜单数组
        secondMenus: any[] = [];
        // 二级菜单选中的索引
        secondMenuSelectedIndex: number = 0;
        // 二级菜单选中的路由
        secondMenuSelectRouter: string = "";
        // 三级菜单数组
        thirdMenus: any[] = [];
        // 三级菜单选中的索引
        thirdMenuSelectedIndex: number = 0;
        // 三级菜单选中的路由
        thirdMenuSelectRouter: string = "";
        // 面包屑
        breadCrumb: any[] = [];
        // 当前路由的数组
        routeArr: any[] = [];
        // 循环路由索引
        indexNum: number = 0;

        mounted() {
            this.routeArr = this.$route.path.split("/");
            this.routeArr.splice(0, 1);
            this.getBreadCrumb();
        }

        routerChange() {
            let routerPath = "";
            if (this.thirdMenuSelectRouter !== "") {
                routerPath = `/${this.menuSelectRouter}/${this.secondMenuSelectRouter}/${this.thirdMenuSelectRouter}`;
            } else if (this.secondMenuSelectRouter !== "") {
                routerPath = `/${this.menuSelectRouter}/${this.secondMenuSelectRouter}`;
            } else {
                routerPath = `/${this.menuSelectRouter}`;
            }
            this.$router.push(routerPath);
        }

        // 一级菜单切换
        menuChange(menu: any, index: number) {
            this.menuSelectedIndex = index;
            this.menuSelectRouter = menu.key;
            this.secondMenuSelectedIndex = 0;
            this.thirdMenuSelectedIndex = 0;
            this.subTitle = menu.subLabel;
            if (menu.children && menu.children.length > 0) {
                this.secondMenus = menu.children;
                this.secondMenuSelectRouter = menu.children[0].key;
                if (menu.children[0].children && menu.children[0].children.length > 0) {
                    this.thirdMenus = menu.children[0].children;
                    this.thirdMenuSelectRouter = menu.children[0].children[0].key;
                } else {
                    this.thirdMenus = [];
                    this.thirdMenuSelectRouter = "";
                }
            } else {
                this.secondMenus = [];
                this.thirdMenus = [];
                this.secondMenuSelectRouter = "";
                this.thirdMenuSelectRouter = "";
            }
            this.routerChange();
        }

        // 二级菜单切换
        secondMenuChange(menu: any, index: number) {
            this.secondMenuSelectedIndex = index;
            this.secondMenuSelectRouter = menu.key;
            this.thirdMenuSelectedIndex = 0;
            if (menu.children && menu.children.length > 0) {
                this.thirdMenus = menu.children;
                this.thirdMenuSelectRouter = menu.children[0].key;
            } else {
                this.thirdMenus = [];
                this.thirdMenuSelectRouter = "";
            }
            this.routerChange();
        }

        // 三级菜单切换
        thirdMenuChange(menu: any, index: number) {
            this.thirdMenuSelectedIndex = index;
            this.thirdMenuSelectRouter = menu.key;
            this.routerChange();
        }

        // 遍历菜单
        getBreadCrumb() {
            for (let i = 0, j = sessionMenus.menus.length; i < j; i++) {
                this.matchKey(sessionMenus.menus[i], "", i);
            }
        }

        matchKey(item: any, routePath: string, index: number) {
            if (item.key === this.routeArr[this.indexNum]) {
                switch (this.indexNum) {
                    case 0:
                        this.menuSelectedIndex = index;
                        this.menuSelectRouter = item.key;
                        this.secondMenus = item.children && item.children.length > 0 ? item.children : [];
                        this.subTitle = item.subLabel;
                        break;
                    case 1:
                        this.secondMenuSelectedIndex = index;
                        this.secondMenuSelectRouter = item.key;
                        this.thirdMenus = item.children && item.children.length > 0 ? item.children : [];
                        break;
                    case 2:
                        this.thirdMenuSelectedIndex = index;
                        this.thirdMenuSelectRouter = item.key;
                        break;
                }
                if (item.children) {
                    this.breadCrumb.push({
                        to: "",
                        label: item.label,
                    });
                    this.indexNum++;
                    for (let i = 0, j = item.children.length; i < j; i++) {
                        if (item.children[i].key === this.routeArr[this.indexNum]) {
                            this.matchKey(item.children[i], routePath + "/" + item.key, i);
                        }
                    }
                } else if (item.sub) {
                    this.breadCrumb.push({
                        to: routePath + "/" + item.key,
                        label: item.label,
                    });
                    this.indexNum++;
                    for (let i = 0, j = item.sub.length; i < j; i++) {
                        if (item.sub[i].key === this.routeArr[this.indexNum]) {
                            this.breadCrumb.push({
                                to: "",
                                label: item.sub[i].label,
                            });
                            this.indexNum = 0;
                            return;
                        }
                    }
                    this.indexNum = 0;
                } else {
                    this.breadCrumb.push({
                        to: "",
                        label: item.label,
                    });
                    this.indexNum = 0;
                    return;
                }
            }
        }

        @Watch("$route")
        "watchRoute"(newVal: any) {
            this.breadCrumb = [];
            this.routeArr = newVal.path.split("/");
            this.routeArr.splice(0, 1);
            this.getBreadCrumb();
        }
    }
</script>

<style lang="stylus" scoped>
    #layout {
        .frame-layout-sider {
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: row;
            height: 100vh;
            overflow: auto;
            font-family: PingFang-SC-Medium;
            transition: width .5s ease-in-out;

            .first-menus {
                flex: 0 0 100px;
                width: 100px;
                background: #001528;

                .avatar-logo {
                    display: block;
                    margin: 16px auto;
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    background: #eafff8;
                }

                .menu-list {
                    color: rgba(255, 255, 255, 0.65);
                    font-size: 14px;

                    .menu-item {
                        height: 58px;
                        line-height: 58px;
                        text-align: center;
                        cursor: pointer;
                        transition: color .2s ease-in;

                        &:hover {
                            color: #fff;
                            transition: color .2s ease-in;
                        }

                        &.selected {
                            color: #fff;
                            background: #1790ff;
                        }

                        .menu-item-text {
                            margin-left: 8px;
                        }
                    }
                }
            }

            .second-menus {
                flex: 0 0 100px;
                width: 100px;
                height: 100vh;
                background: #fff;
                border-right: 1px solid rgb(229, 229, 229);

                .second-menus-title {
                    display: block;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    font-size: 14px;
                    font-weight: 500;
                    color: #333;
                    border-bottom: 1px solid rgb(229, 229, 229);
                }

                .menu-list {
                    color: #595959;
                    font-size: 13px;

                    .menu-item {
                        height: 58px;
                        line-height: 58px;
                        text-align: center;
                        cursor: pointer;
                        transition: color .2s ease-in;

                        &:hover {
                            color: #000;
                            transition: color .2s ease-in;
                        }

                        &.selected {
                            color: #1790ff;
                            background: #fafafa;
                        }
                    }
                }
            }
        }


        header {
            position: fixed;
            top: 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: calc(100vw - 100px);
            height: 50px;
            line-height: 50px;
            background: #fff;
            border-bottom: 1px solid rgb(229, 229, 229);
            z-index: 9;

            &.has-second {
                width: calc(100vw - 200px);
            }

            .menu-list {
                display: flex;
                flex-direction: row;
                color: #595959;
                font-size: 14px;

                .menu-item {
                    margin: 0 30px;
                    height: 50px;
                    line-height: 50px;
                    cursor: pointer;
                    transition: color .2s ease-in;

                    &:hover {
                        color: #000;
                        transition: color .2s ease-in;
                    }

                    &.selected {
                        color: #1790ff;
                        border-bottom: 1px solid #1790ff;
                    }
                }
            }

            .menu-block {
                width 1px;
            }

        }

        .frame-container {
            padding-top: 50px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100vh;
            transition: margin .5s ease-in-out;

            .frame-content {
                margin: 16px;
                padding: 16px;
                background: #fff;
            }

            footer {
                padding: 64px 0 36px 0;
                font-size: 12px;
                color: #8c8c8c;
                text-align: center;
            }
        }

    }
</style>
