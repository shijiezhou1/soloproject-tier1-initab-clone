<template>
    <div class="clock">
        <span class="timer"
            >{{ time }} <span class="ma">{{ ma }}</span></span
        >
        <span class="dater">{{ date }}</span>
    </div>
</template>

<script>
import { reactive, toRefs, defineComponent, onMounted } from "vue";

export default defineComponent({
    setup() {
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        const getTimer = () => {
            const today = new Date();
            let hours = today.getHours();
            let minutes = today.getMinutes();
            //let seconds = today.getSeconds();
            hours = hours % 12;
            hours = hours ? hours : 12;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            const dd = String(today.getDate()).padStart(2, "0");
            const mm = today.getMonth();
            const yyyy = today.getFullYear();
            const ma = new Date().getMonth() >= 12 ? "PM" : "AM";

            return {
                time: `${hours}:${minutes}`,
                date: `${monthNames[mm]} ${dd}, ${yyyy}`,
                ma,
            };
        };

        let data = reactive({
            time,
            date,
            ma,
        });
        let { time, date, ma } = getTimer();

        const setTimer = () => {
            const { time, date, ma } = getTimer();
            data.time = time;
            data.date = date;
            data.ma = ma;
        };

        onMounted(() => {
            setInterval(() => {
                setTimer();
            }, 1000);
            setTimer();
        });

        return {
            ...toRefs(data),
        };
    },
});
</script>

<style lang="scss" scoped>
.clock {
    @include flexCenter;
    height: 50%;
    color: #969fbb;
    flex-direction: column;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    .timer {
        font-size: 120px;
        font-weight: 400;
        position: relative;

        .ma {
            position: absolute;
            bottom: 10px;
            font-size: 32px;
            font-weight: 400;
            margin-left: 0;
        }
    }
    .dater {
        font-weight: 200;
        font-size: 20px;
    }
}
</style>
