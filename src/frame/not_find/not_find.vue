<template lang="pug">
    #fullScreen.fullScreen
        img.rotating(src="./spaceman.svg" alt="spaceman")
        .notfound-text
            h1 Page lost in space
            h2
                a(@click="goBackHome") Go back to the homepage
        canvas#canvas2d
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import StarField from "./space.js";

    @Component
    export default class NotFind extends Vue {
        goBackHome() {
            this.$router.replace("/");
        }

        mounted() {
            StarField();
        }
    }
</script>

<style lang="stylus" scoped>
    .fullScreen {
        position: relative;
        height: 100%;

        img.rotating {
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -256px;
            margin-top: -256px;
            transition: opacity 2s ease-in;
            animation: rotating 120s linear infinite;
        }

        .notfound-text {
            position: absolute;
            bottom: 50px;
            right: 50px;

            h1 {
                color: #fff;
            }
        }

        #canvas2d {
            width: 100%;
            height: 100%;
        }

    }

    @keyframes rotating {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
        }
    }
</style>
