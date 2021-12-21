<template>
    <div class="reddit">
        <!-- <div>{{ global.state.reddit.children }}</div> -->
        <div class="topics">
            <span>
                <font-awesome-icon :icon="['fab', 'reddit-alien']" />
            </span>
            <span>POPULAR ON R/JAVASCRIPT</span>
        </div>

        <div class="wrapper">
            <div v-for="ls in redditList" :key="ls.data.url" class="children">
                <a :href="ls.data.url" class="children-item">
                    <div>{{ ls.data.title }}</div>
                    <div>
                        <span class="color-10">Posted by: </span><span class="color-13">{{ ls.data.author }}</span>
                    </div>
                    <div class="color-19">Reddit Score: {{ ls.data.score }}</div>
                    <a :href="ls.data.url">Link to Comments</a>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, defineComponent } from "vue";

export default defineComponent({
    props: {
        reddit: {},
    },
    setup(props) {
        return {
            redditList: computed(() => props.reddit.state.reddit.children),
        };
    },
});
</script>

<style lang="scss" scoped>
@include sections;
</style>
