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
            <div v-for="ls in global.state.reddit.children" :key="ls.data.url" class="children">
            <a :href="ls.data.url" class="children-item">
                <div>{{ ls.data.title }}</div>
                <div>Posted by: <span>{{ ls.data.author }}</span></div>
                <div>Reddit Score: {{ ls.data.score }}</div>
                <a :href="ls.data.url">Link to Comments</a>
            </a>
        </div>
        </div>
    
    </div>
</template>

<script>
import { defineComponent, onMounted, inject } from "vue";

export default defineComponent({
    setup() {
        const global = inject("global");

        onMounted(() => {
            global.setReddit();
        });

        return {
            global,
        };
    },
});
</script>

<style lang="scss" scoped>
.children {
    margin: 10px 0;
    &-item {
        text-decoration: none;
        color: #000;
    }


}

.topics {
    margin-top: 40px;
    margin-bottom: 40px;

    @include flexCenter;
}
</style>