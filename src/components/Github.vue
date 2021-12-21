<template>
    <div class="github">
        
        <div class="topics">
            <span>
                <font-awesome-icon :icon="['fab', 'github']" />
            </span>
            <span>GITHUB ISSUES HISTORY</span>
        </div>

        <div class="wrapper">
            <div v-for="(ls, index) in githubList" :key="repo + index" class="children">
                <a :href="ls.url" class="children-item">
                    <div class="color-19">Repo: {{ ls.repo }}</div>
                    <div class="color-13">Issue #{{ ls.issueNumber }}</div>
                    <div>{{ls.issue}}</div>
                </a>
            </div>
        </div>
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
@include sections;
</style>
