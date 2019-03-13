<template lang="pug">
    #not-find
        | 该页面正在开发中
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class NotFind extends Vue {
    }
</script>

<style lang="stylus" scoped>
    #not-find {
        background: #bff6f9;
    }
</style>
