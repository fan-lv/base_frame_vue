<template lang="pug">
    .frame-demo
        h2 基本使用
        a-select(placeholder="请选择" allowClear)
            a-select-option(value="1") 限时折扣
            a-select-option(value="2") 满减优惠
            a-select-option(value="3" disabled) 权威指南
            a-select-option(value="4") 高级设计
        pre(v-highlight)
            code(class="pug")
                | a-select(placeholder="请选择" allowClear)
                |    a-select-option(value="1") 限时折扣
                |    a-select-option(value="2") 满减优惠
                |    a-select-option(value="3" disabled) 权威指南
                |    a-select-option(value="4") 高级设计
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class Select extends Vue {
    }
</script>
<style lang="stylus" scoped>

</style>
