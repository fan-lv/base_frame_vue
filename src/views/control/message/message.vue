<template lang="pug">
    .frame-demo
        h2 普通反馈
        a-button(@click="info") 普通反馈
        pre(v-highlight)
            code(class="pug")
                | a-button(@click="info") 普通反馈
        pre(v-highlight)
            code(class="JavaScript")
                | info() {
                |    this.$message.info("这是普通的消息");
                | }
        h2 成功反馈
        a-button(@click="success") 成功反馈
        pre(v-highlight)
            code(class="pug")
                | a-button(@click="success") 成功反馈
        pre(v-highlight)
            code(class="JavaScript")
                | success() {
                |    this.$message.success("这是成功的反馈");
                | }
        h2 失败反馈
        a-button(@click="error") 失败反馈
        pre(v-highlight)
            code(class="pug")
                | a-button(@click="error") 失败反馈
        pre(v-highlight)
            code(class="JavaScript")
                | error() {
                |    this.$message.error("这是失败的反馈");
                | }
        h2 警告反馈
        a-button(@click="warning") 警告反馈
        pre(v-highlight)
            code(class="pug")
                | a-button(@click="warning") 警告反馈
        pre(v-highlight)
            code(class="JavaScript")
                | warning() {
                |    this.$message.warning("这是警告的反馈");
                | }
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class Message extends Vue {
        info() {
            this.$message.info("这是普通的消息");
        }

        success() {
            this.$message.success("这是成功的反馈");
        }

        error() {
            this.$message.error("这是失败的反馈");
        }

        warning() {
            this.$message.warning("这是警告的反馈");
        }
    }
</script>
<style lang="stylus" scoped>

</style>
