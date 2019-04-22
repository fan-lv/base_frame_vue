<template lang="pug">
    .frame-demo
        h2 页码
        a-pagination(showQuickJumper :total="500" @change="onChange")
        pre(v-highlight)
            code(class="pug")
                | a-pagination(showQuickJumper :total="500" @change="onChange")
        pre(v-highlight)
            code(class="javascript")
                | onChange(pageNumber: number) {
                |    console.log("Page: ", pageNumber);
                | }
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class Alert extends Vue {
        onChange(pageNumber: number) {
            console.log("Page: ", pageNumber);
        }
    }
</script>
<style lang="stylus" scoped>

</style>
