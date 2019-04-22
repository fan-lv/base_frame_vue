<template lang="pug">
    .quill-chinese
        a-spin(:spinning="imageLoading")
            quill-editor(v-model="context" ref="myQuillEditor" :options="editorOption")
            a-upload(style="display:none" :showUploadList="false" :action="apiConfig.imgUpload" @change="handleChange" accept=".jpg,.jpeg,.png,.gif,.svg,.bmp" name="image")
                a-button#uploadButton(style="display:none")
</template>

<script lang="ts">
    import {Vue, Component, Watch} from "vue-property-decorator";
    import Quill from "quill";
    import {quillEditor} from "vue-quill-editor";
    import "quill/dist/quill.snow.css";

    const toolbarOptions: any[] = [
        ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线
        ["blockquote", "code-block"], // 引用  代码块
        [{header: 1}, {header: 2}], // 1、2 级标题
        [{list: "ordered"}, {list: "bullet"}], // 有序、无序列表
        [{script: "sub"}, {script: "super"}], // 上标/下标
        [{indent: "-1"}, {indent: "+1"}], // 缩进
        // [{'direction': 'rtl'}],                         // 文本方向
        [{size: ["small", false, "large", "huge"]}], // 字体大小
        [{header: [1, 2, 3, 4, 5, 6, false]}], // 标题
        [{color: []}, {background: []}], // 字体颜色、字体背景颜色
        [{font: []}], // 字体种类
        [{align: []}], // 对齐方式
        ["clean"], // 清除文本格式
        ["link", "image", "video"], // 链接、图片、视频
    ];

    @Component({
        components: {
            quillEditor,
        },
        props: {
            content: {
                type: String,
                default: "",
            },
        },
    })
    export default class QuillChinese extends Vue {
        addImgRange: any = {};
        context: string = "";
        imageLoading: boolean = false;
        editorOption: any = {
            placeholder: "请输入正文内容！",
            modules: {
                toolbar: {
                    container: toolbarOptions,
                },
            },
        };

        @Watch("context")
        watchContext(newValue: any, oldValue: any) {
            this.$emit("update:content", newValue);
        }

        handleChange(info: any) {
            this.imageLoading = false;
            const el: any = this.$refs.myQuillEditor;
            const self = this;
            const value = this.apiConfig.imgView + info.file.response.data;
            this.addImgRange = el.quill.getSelection();
            el.quill.insertEmbed(
                self.addImgRange != null ? self.addImgRange.index : 0,
                "image",
                value,
                Quill.sources.USER,
            );
        }

        mounted() {
            const el: any = this.$refs.myQuillEditor;
            const imgHandler = (image: any) => {
                this.imageLoading = true;
                this.addImgRange = el.quill.getSelection();
                if (image) {
                    const fileInput: any = document.getElementById("uploadButton"); // 隐藏的file文本ID
                    fileInput.click(); // 加一个触发事件
                }
            };
            el.quill.getModule("toolbar").addHandler("image", imgHandler);
        }
    }
</script>

<style lang="stylus">
    .ql-editor {
        height: 320px;
    }

    .detail-box .ivu-upload-drag {
        border: 0;
    }

    .detail-box .ivu-form-item-label, .detail-box .ivu-select, .detail-box input, .detail-box textarea {
        font-size: 12px;
        color: #000;
    }

    .ql-snow .ql-tooltip[data-mode=link]::before {
        content: "请输入链接地址:";
    }

    .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
        border-right: 0;
        content: '保存';
        padding-right: 0;
    }

    .ql-snow .ql-tooltip[data-mode=video]::before {
        content: "请输入视频地址:";
    }

    .ql-snow .ql-picker.ql-size .ql-picker-label::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item::before {
        content: '14px';
    }

    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {
        content: '10px';
    }

    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {
        content: '18px';
    }

    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {
        content: '32px';
    }

    .ql-snow .ql-picker.ql-header .ql-picker-label::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item::before {
        content: '文本';
    }

    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
        content: '标题1';
    }

    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
        content: '标题2';
    }

    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
        content: '标题3';
    }

    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
        content: '标题4';
    }

    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
        content: '标题5';
    }

    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
        content: '标题6';
    }

    .ql-snow .ql-picker.ql-font .ql-picker-label::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item::before {
        content: '标准字体';
    }

    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {
        content: '衬线字体';
    }

    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {
        content: '等宽字体';
    }
</style>
