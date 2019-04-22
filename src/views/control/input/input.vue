<template lang="pug">
    .frame-demo
        h2 基本使用
        a-input(placeholder="我是输入框(默认宽度242px)")
        pre(v-highlight)
            code(class="pug")
                | a-input(placeholder="我是输入框(默认宽度242px)")
        h2 禁用
        a-input(value="我是输入框(默认宽度242px)" disabled)
        pre(v-highlight)
            code(class="pug")
                | a-input(value="我是输入框(默认宽度242px)" disabled)
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class Input extends Vue {
    }
</script>
<style lang="stylus" scoped>

</style>
