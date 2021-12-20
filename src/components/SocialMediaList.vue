<template>
    <div class="social-media-container">
        <a
            :href="ls.link"
            v-for="ls in list"
            :key="ls.name"
            :style="{ color: ls.color }"
        >
            <font-awesome-icon :icon="['fab', ls.icon]" />
        </a>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        return {
            list: [
                {
                    name: "twitter",
                    icon: "twitter",
                    link: "https://twitter.com/shijiezhou5",
                    color: "#00b5ff",
                },
                {
                    name: "github",
                    icon: "github",
                    link: "https://github.com/shijiezhou1",
                    color: "#000000",
                },
            ],
        };
    },
});
</script>

<style lang="scss" scoped>
.social-media-container {
    position: absolute;
    bottom: 60px;
    left: 0;
    right: 0;
    @include flexCenter;

    a {
        padding: 10px;
        font-size: 20px;
        opacity: 0.5;
        &:hover {
            opacity: 1;
        }
    }
}
</style>
