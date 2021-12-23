<template>
    <div class="nav-container">
        <div
            v-for="ls in lists"
            :key="ls.id"
            :class="ls"
            class="row"
            :style="{ color: ls.color }"
        >
            <span class="icon" :style="{ 'background-color': ls.color }">
                <font-awesome-icon :icon="ls.icon" />
            </span>
            <span class="name">{{ ls.name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        const lists = [
            { id: 1, name: "settings", icon: "wrench", color: "#d7005f" },
            { id: 2, name: "gists", icon: "code", color: "#d75f00" },
            {
                id: 3,
                name: "stack overflow",
                icon: "filter",
                color: "#3e999f",
            },
            { id: 4, name: "trending", icon: "chart-line", color: "#718c00" },
            {
                id: 5,
                name: "scratch pad",
                icon: "pencil-alt",
                color: "#005f87",
            },
            { id: 6, name: "playground", icon: "lightbulb", color: "#4d4d4c" },
            { id: 7, name: "help/intro", icon: "question", color: "#8959a8" },
            { id: 8, name: "rate & review", icon: "star", color: "#df0000" },
        ];

        return {
            lists,
        };
    },
};
</script>

<style lang="scss" scoped>
.nav-container {
    .row {
        margin: 20px;
        display: flex;
        align-items: center;

        .name {
            text-transform: uppercase;
            font-size: 12px;
            text-transform: uppercase;
            font-family: "Inconsolata", monospace;
            margin-left: 6px;
            cursor: pointer;
        }

        .icon {
            @include sameHeightWidth(20px);
            @include flexCenter;
            color: #d0d0d0;
            font-size: 12px;
            line-height: 20px;
        }
    }
}
</style>
