<template>
    <div class="clock">
        {{ timer }}
    </div>
</template>

<script>
export default {
    setup() {
        const today = new Date();
        const timer =
            today.getHours() +
            ":" +
            today.getMinutes() +
            ":" +
            today.getSeconds();

        return {
            timer,
        };
    },
};
</script>

<style lang="scss" scoped></style>
