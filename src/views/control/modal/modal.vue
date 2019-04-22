<template lang="pug">
    .frame-demo
        h2 基本
        a-button(@click="showModal") 打开弹窗
        a-modal(width="426px" title="提示" v-model="show" okText="确定" cancelText="取消")
            p 确定下架？下架后商品将无法显示？
        pre(v-highlight)
            code(class="pug")
                | a-button(@click="showModal") 打开弹窗
                | a-modal(width="426px" title="提示" v-model="show" okText="确定" cancelText="取消")
                |   p 确定下架？下架后商品将无法显示？
        pre(v-highlight)
            code(class="JavaScript")
                | show: boolean = false;
                | showModal() {
                |    this.show = true;
                | }
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class Modal extends Vue {
        show: boolean = false;

        showModal() {
            this.show = true;
        }
    }
</script>
<style lang="stylus" scoped>

</style>
