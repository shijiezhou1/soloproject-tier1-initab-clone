<template>
    <div class="github">
        
        <div class="topics">
            <span>
                <font-awesome-icon :icon="['fab', 'reddit-alien']" />
            </span>
            <span>GITHUB ISSUES HISTORY</span>
        </div>

        <!-- <div class="wrapper">
            <div v-for="ls in githubList" :key="ls.data.url" class="children">
                <a :href="ls.data.url" class="children-item">
                    <div>{{ ls.data.title }}</div>
                    <div>
                        Posted by: <span>{{ ls.data.author }}</span>
                    </div>
                    <div>Reddit Score: {{ ls.data.score }}</div>
                    <a :href="ls.data.url">Link to Comments</a>
                </a>
            </div>
        </div> -->
    </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
    props: {
        github: {}
    },
    setup(props) {
        return {
            githubList: computed(() => props.github.state.github),  
        }
    },
})
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
