<template lang="pug">
    .frame-demo
        h2 基本使用
        a-date-picker
        pre(v-highlight)
            code(class="pug")
                | a-date-picker
        h2 日期范围选择
        a-range-picker(class="a-range-picker")
        pre(v-highlight)
            code(class="pug")
                | a-range-picker(class="a-range-picker")
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class DatePicker extends Vue {
    }
</script>
<style lang="stylus" scoped>

</style>
