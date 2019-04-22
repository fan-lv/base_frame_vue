<template lang="pug">
    #app
        a-locale-provider(:locale="zh_CN")
            router-view
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
    import moment from "moment";
    import "moment/locale/zh-cn";

    moment.locale("zh-cn");
    @Component
    export default class App extends Vue {
        zh_CN: any = zh_CN;
    }
</script>
<style lang="stylus">
</style>
