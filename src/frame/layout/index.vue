<template lang="pug">
    #layout
        Sider(:style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}")
            Menus
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
    import {Component, Vue} from "vue-property-decorator";
    import Menus from "@/common/layout/menus.vue";
    // import {sessionMenus} from "@/check_session";

    @Component({
        components: {
            Menus,
        },
    })
    export default class Layout extends Vue {
        // menus: any[] = sessionMenus.menus;
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
