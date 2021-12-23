<template>
    <router-view />
</template>

<script>
import global from "@/global.js";
import { onMounted } from "vue";

export default {
    provide: {
        global,
    },
    setup() {
        onMounted(() => {
            document.title = 'Initab Clone App | Shijie Zhou';
        })
    }
};
</script>

<style>
@import "~@/styles/reset.scss";

#app {
    font-family: 'Inconsolata',monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
}
</style>
