<template lang="pug">
    #layout
        Sider(:width="210" :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}")
            img.avatar-logo(src="../../assets/logo.png" alt="logo")
            Menu(:active-name="activeName" theme="dark" width="auto")
                template(v-for="(menu, index) in menus")
                    MenuItem(v-if="!menu.children" :name="menu.key" :to="'/' + menu.key")
                        Icon(:type="menu.icon")
                        | {{menu.label}}
                    Submenu(v-else :name="menu.key")
                        template(slot="title")
                            Icon(:type="menu.icon")
                            | {{menu.label}}
                        template(v-for="(secondMenu, secondMenuIndex) in menu.children")
                            MenuItem(v-if="!secondMenu.children" :name="secondMenu.key" :to="'/' + menu.key + '/' + secondMenu.key")
                                Icon(:type="secondMenu.icon")
                                | {{secondMenu.label}}
                            Submenu(v-else :name="secondMenu.key")
                                template(slot="title")
                                    Icon(:type="secondMenu.icon")
                                    | {{secondMenu.label}}
                                MenuItem(v-for="(thirdMenu, thirdIndex) in secondMenu.children" :key="thirdIndex" :name="thirdMenu.key" :to="'/' + menu.key + '/' + secondMenu.key + '/' + thirdMenu.key")
                                    Icon(:type="thirdMenu.icon")
                                    | {{thirdMenu.label}}
        Layout(:style="{marginLeft: '210px', height: '100vh'}")
            my-header(:breadCrumb="breadCrumb")
            Content(:style="{padding: '16px', overflow: 'auto'}")
                router-view
</template>

<script lang="ts">
    import {Vue, Component, Watch} from "vue-property-decorator";
    import {sessionMenus} from "@/check_session";
    import myHeader from "@/frame/layout/header.vue";

    @Component({
        components: {
            myHeader,
        },
    })
    export default class MyLayout extends Vue {
        activeName: string = "";
        menus: any[] = sessionMenus.menus;
        flag: boolean = false;
        breadCrumb: any[] = [];
        routeArr: any[] = [];
        indexNum: number = 0;

        mounted() {
            this.routeArr = this.$route.path.split("/");
            this.routeArr.splice(0, 1);
            this.getBreadCrumb();
        }

        // 遍历菜单
        getBreadCrumb() {
            for (let i = 0, j = sessionMenus.menus.length; i < j; i++) {
                this.matchKey(sessionMenus.menus[i], "");
            }
        }

        matchKey(item: any, routePath: string) {
            if (item.key === this.routeArr[this.indexNum]) {
                if (item.children) {
                    this.breadCrumb.push({
                        to: "",
                        label: item.label,
                    });
                    this.indexNum++;
                    for (let i = 0, j = item.children.length; i < j; i++) {
                        if (item.children[i].key === this.routeArr[this.indexNum]) {
                            this.matchKey(item.children[i], routePath + "/" + item.key);
                        }
                    }
                } else if (item.sub) {
                    this.activeName = this.routeArr[this.routeArr.length - 1];
                    this.breadCrumb.push({
                        to: routePath + "/" + item.key,
                        label: item.label,
                    });
                    this.indexNum++;
                    for (let i = 0, j = item.sub.length; i < j; i++) {
                        if (item.sub[i].key === this.routeArr[this.indexNum]) {
                            this.activeName = this.routeArr[this.routeArr.length - 2];
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
                    this.activeName = this.routeArr[this.routeArr.length - 1];
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
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;

        .avatar-logo {
            display: block;
            margin: 16px auto;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: #eafff8;
        }
    }
</style>
