<script setup lang="ts">

</script>

<template>
    <div class="container">
        <img src="/images/hero2.webp" alt="Hero image" id="hero-image">
        <div class="hero">
            <img src="/images/logo1.webp" alt="Логотип" id="logo">
            <h4>
                ARTIFACT — это полное переосмысление атмосферы сталкера, вдохновленное произведениями братьев Стругацких.<br><br>
                Модификация на основе S.T.A.L.K.E.R. CoP, рассказывающая о приключениях сталкера по кличке Угрюмый.<br><br>Вас ждет интересный
                сюжет с множеством дополнительных квестов, хорошая графика и затягивающий геймплей.
            </h4>
        </div>
    </div>
</template>

<style scoped>
#logo {
    cursor: pointer;
    box-shadow: 0 0 3rem 3rem rgba(0, 0, 0, 0.6);
    border-radius: 1000rem;
    background-color: rgba(0, 0, 0, 0.6);
    outline: 1px rgba(0, 0, 0, 0.2) solid;
    max-width: 100vw;
}
.container:has(#logo:hover) #hero-image {
    filter: grayscale(0);
}
.container {
    position: relative;
    height: 100vh;
    box-shadow: 0 0 10rem 3rem black inset;
}
.hero {
    position: absolute;
    left: 50%;
    top: 50vh;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
}
h4 {
    filter: brightness(0.8);
    text-align: center;
    text-shadow: 0 0.2rem 5px black;
    box-shadow: 0 0 3rem 3rem rgba(0, 0, 0, 0.6);;
    border-radius: 2rem;
    padding: 1rem 0;
    background-color: rgba(0, 0, 0, 0.6);;
    outline: 1px rgba(0, 0, 0, 0.2) solid;
    max-width: 90vw;
}
#hero-image {
    position: fixed;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all 0.3s;
    filter: grayscale(0.8);
}
</style>