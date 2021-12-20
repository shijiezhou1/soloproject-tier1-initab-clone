<template>
    <div class="home">
        <div class="nav">
            <!-- <component :is="NavigationContainer" /> -->
            <NavigationContainer />

            <SocialMediaList />

            <a href="https://initab.com" target="_blank" class="logo">
                <img :src="require('@/assets/initab-icon.svg')" alt="Initab" />
            </a>
        </div>

        <div class="main">main</div>
    </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
    name: "Home",
    components: {
        NavigationContainer: defineAsyncComponent(() =>
            import("@/components/NavigationContainer.vue")
        ),
        SocialMediaList: defineAsyncComponent(() =>
            import("@/components/SocialMediaList.vue")
        ),
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss" scoped>
.home {
    display: flex;
    align-items: stretch;

    width: 100%;
    height: 100vh;

    .nav {
        flex: 2;
        background-color: #d0d0d0;
        position: relative;

        .logo {
            position: absolute;
            bottom: 20px;
            left: 0;
            right: 0;
            @include flexCenter;

            img {
                width: 100px;
                opacity: 0.5;
            }

            &:hover {
                img {
                    opacity: 1;
                }
            }
        }
    }

    .main {
        flex: 14;
    }
}
</style>
