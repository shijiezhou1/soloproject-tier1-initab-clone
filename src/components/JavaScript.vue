<template>
    <div class="javascript">
        <div class="topics">
            <span>
                <font-awesome-icon :icon="['fa', 'clock']" />
            </span>
            <span>RELEVANT JAVASCRIPT HISTORY</span>
        </div>

        <div class="middle">
            <div class="wrapper">
                <div
                    v-for="(ls, index) in javascriptList"
                    :key="id + index"
                    class="children"
                >
                    <a :href="ls.url" class="children-item row">
                        <img :src="ls.img" alt="logo" class="image" />
                        <div class="color-19">
                            <span class="title">{{ ls.title }}</span>
                            <span class="date">{{ ls.timeAgo }}</span>
                        </div>
                    </a>
                </div>
            </div>

            <Clock />
        </div>
    </div>
</template>

<script>
import { computed, defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
    props: {
        javascript: {},
    },
    components: {
        Clock: defineAsyncComponent(() => import("@/components/Clock.vue")),
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

::v-deep(.wrapper) {
    overflow-y: scroll;
    height: 50%;
}

::v-deep(.image) {
    width: 14px;
    height: 14px;
}

::v-deep(.row) {
    display: flex;
    cursor: pointer;

    .color-19 {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .title {
            margin-left: 10px;
            display: inline-block;
            width: calc(75% - 24px);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 14px;
            font-weight: 100;

            &:hover {
                color: #d75f00;
            }
        }

        .date {
            font-size: 14px;
            font-weight: 100;
            color: #aaa;
        }
    }
}

::v-deep(.children) {
    border-width: 0;
    margin-bottom: 10px;
}

.middle {
    height: 100%;
}
</style>
