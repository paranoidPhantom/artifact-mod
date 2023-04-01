<script setup>
import { onMounted, ref, reactive } from 'vue';
const attachment_grid = ref(null);
onMounted(() => {
  const viewer = new Viewer(attachment_grid.value,{
    button: false,
    title: false,
    toolbar: false,
    navbar: 4,
    zoomRatio: 0.2,
  })
})
</script>

<template>
    <div class="container">
        <router-link to="/" class="homebtn">
            <img src="/images/home.webp">
        </router-link>
        <h1>ИНФОРМАЦИЯ О МОДЕ</h1>
        <iframe src="https://www.youtube.com/embed/f3LR1-AYH9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="screenshots" ref="attachment_grid">
            <img v-for="image in 25" :src="`/images/screenshots/${image}.webp`" :alt="`Screenshot ${image}`">
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
}
.container {
    padding: 2rem;
    display: flex;
    flex-direction: column;;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

iframe {
    width: 60%;
    aspect-ratio: 16/9;
    border-radius: 1rem;
    box-shadow: 0 1rem 2rem 0.5rem rgba(0, 0, 0, 0.8);
}

.screenshots {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 1rem;
}

.screenshots > img {
    cursor: pointer;
    width: 15rem;
    border-radius: 1rem;
    box-shadow: 0 0.3rem 1rem 0.5rem rgba(0, 0, 0, 0.8);
}

.homebtn {
    position: fixed;
    top: 1rem;
    left: 1rem;
    width: 2rem;
    height: 2rem;
    padding: 0.4rem;
    border-radius: 0.8rem;
    background-color: rgba(0, 0, 0, 0.2);
    border: 0.15rem rgba(255, 255, 255, 0.5) solid;
    backdrop-filter: blur(1rem);
}

.homebtn > img {
    width: 100%;
    opacity: 0.5;
}

@media screen and (max-width: 700px) {
    iframe {
        width: 95%;
    }
    .homebtn {
        display: none;
    }
    .screenshots {
        flex-direction: column;
        align-items: center;
    }
    .screenshots > img {
        width: 90%;
    }
}
</style>