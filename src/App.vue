<template lang="pug">
    #app
        MyLayout
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import MyLayout from "@/frame/layout/index.vue";

    @Component({
        components: {
            MyLayout,
        },
    })
    export default class App extends Vue {
    }
</script>
<style lang="stylus">
</style>
