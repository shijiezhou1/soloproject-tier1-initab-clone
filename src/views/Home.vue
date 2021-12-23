<template>
    <div class="home">
        <div class="nav">
            <!-- <component :is="NavigationContainer" /> -->
            <NavigationContainer />

            <SocialMediaList />

            <a :href="profileUrl" target="_blank" class="logo">
                <img :src="require('@/assets/initab-icon.svg')" alt="Initab" />
            </a>
        </div>

        <div class="main">
            <Reddit :reddit="global" />
            <JavaScript :javascript="global" />
            <Github :github="global" />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent, defineAsyncComponent, onMounted, inject } from "vue";

export default defineComponent({
    name: "Home",
    components: {
        NavigationContainer: defineAsyncComponent(() =>
            import("@/components/NavigationContainer.vue")
        ),
        SocialMediaList: defineAsyncComponent(() =>
            import("@/components/SocialMediaList.vue")
        ),
        Reddit: defineAsyncComponent(() => import("@/components/Reddit.vue")),
        JavaScript: defineAsyncComponent(() =>
            import("@/components/JavaScript.vue")
        ),
        Github: defineAsyncComponent(() => import("@/components/Github.vue")),
    },
    setup() {
        const global = inject("global");

        onMounted(() => {
            global.setReddit();
            global.setGithub();
            global.setJavascript();
        });

        return {
            global,
            profileUrl: 'https://github.com/shijiezhou1',
        };
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
        display: flex;
        flex-direction: row;
        flex: 14;

        div:nth-child(1) {
            width: 25%;
            overflow: scroll;
        }
        div:nth-child(2) {
            width: 50%;
            display: flex;
            flex-direction: column;
        }
        div:nth-child(3) {
            width: 25%;
            overflow: scroll;
        }
    }
}
</style>
