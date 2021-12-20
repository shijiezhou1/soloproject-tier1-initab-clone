<template>
    <router-view />
</template>

<script>
import global from "@/global.js";

export default {
    provide: {
        global,
    },
};
</script>

<style>
@import "~@/styles/reset.scss";

#app {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
}
</style>
