<template>
    <div class="home">
        <div class="nav">
            <!-- <component :is="NavigationContainer" /> -->
            <NavigationContainer />
        </div>

        <div class="main">main</div>
    </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
    name: "Home",
    // components: {
    //     NavigationContainer: defineAsyncComponent(() => import('@/components/NavigationContainer.vue'))
    // },
    setup() {

        const NavigationContainer =  defineAsyncComponent(() => import('@/components/NavigationContainer.vue'))

        return {
            NavigationContainer
        }
    }
});
</script>

<style lang="scss" scoped>

.home {
    display: flex;
    align-items: stretch;

    width: 100%;
    height: 100vh;

    .nav {
        flex: 1;
        border: 1px solid red;
        background-color: #d0d0d0;
    }

    .main {
        flex: 11;

    }
}
</style>
