<template lang="pug">
    .frame-demo
        QuillChinese
        pre(v-highlight)
            code(class="vue")
                | &lt;template lang="pug"&gt;
                |    .rich-text
                |        QuillChinese
                | &lt;/template&gt;
                | &lt;script lang="ts"&gt;
                |    import {Vue, Component} from "vue-property-decorator";
                |    import QuillChinese from "@/components/quill_chinese.vue";
                |
                |    @Component({
                |        components: {
                |            QuillChinese,
                |        },
                |    })
                |    export default class RichText extends Vue {
                |    }
                | &lt;/script&gt;

</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import QuillChinese from "@/components/quill_chinese.vue";

    @Component({
        components: {
            QuillChinese,
        },
    })
    export default class RichText extends Vue {
    }
</script>
<style lang="stylus" scoped>

</style>
