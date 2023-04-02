<script setup lang="ts">
import { ref } from 'vue';

var countDownDate = new Date("Apr 2, 2023 23:30:00 GMT+03:00").getTime();
const timerValue: any = ref("__:__:__:__")
const timerCheckInterval = setInterval(() => {
    var now = Date.now();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
    var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString();

    timerValue.value = `${days.padStart(2, "0")}:${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(timerCheckInterval);
        timerValue.value = null
        setTimeout(() => {
            window.location.reload()
        }, 5000);
    }
}, 500);
</script>

<template>
    <h1>До начала ОБТ</h1>
    <hr v-if="!timerValue">
    <h2 v-if="timerValue" id="countdown">{{ timerValue }}</h2>
    <h2 class="updsoon" v-else>Сайт скоро обновиться!</h2>
</template>

<style scoped>
#countdown,
h1 {
    width: 100%;
    text-align: center;
    margin: 1rem 0;
}

h2 {
    text-align: center;
}
.updsoon {
    margin: 3rem 0;
}
</style>