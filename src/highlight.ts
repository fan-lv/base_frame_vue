import Vue from "vue";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

Vue.directive("highlight", (el) => {
    const blocks = el.querySelectorAll("pre code");
    blocks.forEach((block) => {
        hljs.highlightBlock(block);
    });
});
