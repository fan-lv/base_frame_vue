<template lang="pug">
    #layout
        Sider(:style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}")
            Menu(:active-name="activeName" theme="dark" width="auto")
                template(v-for="(menu, index) in menus")
                    MenuItem(v-if="!menu.children" :name="menu.key" :to="'/' + menu.key") {{menu.label}}
                    Submenu(v-else :name="menu.key")
                        template(slot="title") {{menu.label}}
                        template(v-for="(secondMenu, secondMenuIndex) in menu.children")
                            MenuItem(v-if="!secondMenu.children" :name="secondMenu.key" :to="'/' + menu.key + '/' + secondMenu.key") {{secondMenu.label}}
                            Submenu(v-else :name="secondMenu.key")
                                template(slot="title") {{secondMenu.label}}
                                MenuItem(v-for="(thirdMenu, thirdIndex) in secondMenu.children" :key="thirdIndex" :name="thirdMenu.key" :to="'/' + menu.key + '/' + secondMenu.key + '/' + thirdMenu.key") {{thirdMenu.label}}
        Layout(:style="{marginLeft: '200px'}")
            Header(:style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}")
            Content(:style="{padding: '0 16px 16px'}")
                Breadcrumb(:style="{margin: '16px 0'}")
                    BreadcrumbItem Home
                    BreadcrumbItem Components
                    BreadcrumbItem Layout
                router-view
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {sessionMenus} from "@/check_session";

    @Component
    export default class MyLayout extends Vue {
        activeName: string = "";
        menus: any[] = sessionMenus.menus;

        mounted() {
            const href = window.location.href;
            const hrefArr = href.split("/");
            this.activeName = hrefArr[hrefArr.length - 1];
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

        .layout-header-bar {
            background: #fff;
            box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
        }
    }
</style>
