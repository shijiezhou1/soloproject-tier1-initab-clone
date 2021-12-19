<template>
    <div class="nav-container">
        <div v-for="ls in lists" :key="ls.id">
            <span></span>
            <span class="name">{{ ls.name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        const lists = [
            { id: 1, name: "settings", icon: "settings", color: "xxx" },
            { id: 2, name: "gists", icon: "code", color: "xxx" },
            {
                id: 3,
                name: "stack overflow",
                icon: "stack overflow",
                color: "xxx",
            },
            { id: 4, name: "trending", icon: "trending", color: "xxx" },
            { id: 5, name: "scratch pad", icon: "trending", color: "xxx" },
            { id: 6, name: "playground", icon: "trending", color: "xxx" },
            { id: 7, name: "help/intro", icon: "trending", color: "xxx" },
            { id: 8, name: "rate & review", icon: "trending", color: "xxx" },
        ];

        return {
            lists,
        };
    },
};
</script>

<style lang="scss" scoped>
.nav-container {

    .name {
        text-transform: uppercase;
        }
}
</style>
