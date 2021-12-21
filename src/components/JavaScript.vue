<template>
    <div class="javascript">
        <div class="topics">
            <span>
                <font-awesome-icon :icon="['fa', 'clock']" />
            </span>
            <span>RELEVANT JAVASCRIPT HISTORY</span>
        </div>

        {{javascriptList}}

        <Clock />
    </div>
</template>

<script>
import Clock from '@/components/Clock';
import { computed, defineComponent } from "vue";

export default defineComponent({
    props: {
        javascript: {},
    },
    components: {
        Clock,
    },
    setup(props) {
        return {
            javascriptList: computed(() => props.javascript.state.javascript),
        };
    },
});
</script>

<style lang="scss" scoped>
@include sections;
</style>
