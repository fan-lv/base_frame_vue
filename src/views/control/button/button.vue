<template lang="pug">
    .frame-demo
        h2 主按钮
        a-button(type="primary") 按钮
        a-button(type="primary" style="margin-left: 12px;") 四个文字
        a-button(type="primary" style="margin-left: 12px;") 这里有七个文字
        pre(v-highlight)
            code(class="pug")
                | a-button(type="primary") 按钮
        h2 次按钮
        a-button 按钮
        a-button(style="margin-left: 12px;") 四个文字
        a-button(style="margin-left: 12px;") 这里有七个文字
        pre(v-highlight)
            code(class="pug")
                | a-button 按钮
        h2 虚线按钮
        a-button(type="dashed") 按钮
        a-button(type="dashed" style="margin-left: 12px;") 四个文字
        a-button(type="dashed" style="margin-left: 12px;") 这里有七个文字
        pre(v-highlight)
            code(class="pug")
                | a-button(type="dashed") 按钮
        h2 实线按钮
        a-button(type="primary" ghost) 按钮
        a-button(type="primary" ghost style="margin-left: 12px;") 四个文字
        a-button(type="primary" ghost style="margin-left: 12px;") 这里有七个文字
        pre(v-highlight)
            code(class="pug")
                | a-button(type="primary" ghost) 按钮
        h2 不可用按钮
        a-button(disabled) 按钮
        a-button(disabled style="margin-left: 12px;") 四个文字
        a-button(disabled style="margin-left: 12px;") 这里有七个文字
        pre(v-highlight)
            code(class="pug")
                | a-button(disabled) 按钮
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class Button extends Vue {
    }
</script>
<style lang="stylus" scoped>

</style>
