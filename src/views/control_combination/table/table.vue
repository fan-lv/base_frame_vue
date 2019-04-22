<template lang="pug">
    .frame-demo
        a-table(:columns= "columns" :dataSource= "data" :scroll="{ x: 1300 }")
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class Table extends Vue {
        columns: any = [];
        data: any = [];
    }
</script>
