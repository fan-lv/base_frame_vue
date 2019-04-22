<template lang="pug">
    .frame-demo
        h2 带图标的提示注释
        a-alert(type="info" showIcon message="积分按照实际支付的金额来计算")
        pre(v-highlight)
            code(class="pug")
                | a-alert(type="info" showIcon message="积分按照实际支付的金额来计算")
        a-alert(type="success" showIcon message="积分按照实际支付的金额来计算")
        pre(v-highlight)
            code(class="pug")
                | a-alert(type="success" showIcon message="积分按照实际支付的金额来计算")
        a-alert(type="warning" showIcon message="积分按照实际支付的金额来计算")
        pre(v-highlight)
            code(class="pug")
                | a-alert(type="warning" showIcon message="积分按照实际支付的金额来计算")
        a-alert(type="error" showIcon message="积分按照实际支付的金额来计算")
        pre(v-highlight)
            code(class="pug")
                | a-alert(type="error" showIcon message="积分按照实际支付的金额来计算")
        a-alert(type="error" showIcon message="积分按照实际支付的金额来计算，取实际支付金额【】倍，默认设置为1倍,取实际支")
        pre(v-highlight)
            code(class="pug")
                | a-alert(type="error" showIcon message="积分按照实际支付的金额来计算，取实际支付金额【】倍，默认设置为1倍,取实际支")
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class Alert extends Vue {
    }
</script>
<style lang="stylus" scoped>

</style>
