<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { onMounted, ref } from 'vue';

const router = useRouter()
const reviewValue = ref("")
const ratingValue = ref(5)
const issuesValue = ref("")
const formLink = (info: String, rating: Number, problems: String) => {
    if (!problems) { problems = "Не указано" }
    return `https://docs.google.com/forms/d/e/1FAIpQLSewgbA5yJMFXxfQvTQ4fbXee1IrDkl5zsrdjGqTmgY9ZCiT5A/formResponse?Submit=submit&entry.1817029549=${info}&entry.775152867=${rating}&entry.90456197=${problems}`
}
const submitForm = () => {
    try {
        fetch(formLink(reviewValue.value, ratingValue.value, issuesValue.value), { mode: 'no-cors' })
            .then((response) => {
                router.push('/')
            });
    } catch (err) { }
}
</script>

<template>
    <div class="container">
        <iframe id="background-video" src="https://www.youtube.com/embed/5ncbY6LFRfc?controls=0&autoplay=1&loop=1&repeat=1&modestbranding=1&showinfo=0" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        <div id="install">

        </div>
        <div id="feedback">
            <h3>ОТЗЫВ</h3>
            <textarea class="feedback" name="feedback" v-model="reviewValue"></textarea>
            <h3>ОЦЕНКА - {{ ratingValue }}</h3>
            <input class="slider" type="range" name="rating" min="1" max="10" v-model="ratingValue">
            <h3>ПРОБЛЕМЫ (ЕСЛИ СТОЛКНУЛИСЬ)</h3>
            <textarea class="feedback" name="feedback" v-model="issuesValue"></textarea>
            <button @click="submitForm">Отправить</button>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    min-height: 100vh;
}

#background-video {
    position: fixed;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
    user-select: none;
    transform: scale(1.2);
    filter: saturate(1.3) brightness();
    pointer-events: none;
}

#install {
    width: 60%;
    margin: 1rem;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(0.5rem);
    border-radius: 1.5rem;
    padding: 1.5rem;
    border: 2px rgba(255, 255, 255, 0.4) solid;
}

#feedback {
    width: calc(40% - 3rem);
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(0.5rem);
    margin: 1rem;
    border-radius: 1.5rem;
    padding: 1.5rem;
    border: 2px rgba(255, 255, 255, 0.4) solid;
}

textarea {
    width: 100%;
    height: 30%;
    border-radius: 0.5rem;
    background: none;
    color: white;
    margin-bottom: 1rem;
    resize: vertical;
    font-family: "Inter", sans-serif;
    font-weight: 100;
}

textarea:focus {
    outline: rgba(255, 255, 255, 0.5) solid 1px;
}

h3 {
    margin: 1rem 0;
}

.slider {
    -webkit-appearance: none;
    appearance: none;
    width: 50%;
    height: 1rem;
    border-radius: 2rem;
    outline: none;
    opacity: 0.8;
    -webkit-transition: 0.3s;
    transition: all 0.3s;
    background-color: rgba(255, 255, 255, 0.2);
}

.slider:hover {
    background-color: rgba(255, 255, 255, 0.3);
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1.2rem;
    height: 1.2rem;
    background: white;
    cursor: pointer;
    border-radius: 2rem;
    transition: all 0.3s;
}

.slider::-moz-range-thumb {
    width: 1.2rem;
    height: 1.2rem;
    background: white;
    cursor: pointer;
    border-radius: 2rem;
    transition: all 0.3s;
}

button {
    background-color: white;
    color: black;
    mix-blend-mode: screen;
    font-size: 1.5rem;
    font-weight: bolder;
    transition: all 0.4s;
    cursor: pointer;
    border: none;
    text-transform: uppercase;
    margin-left: 50%;
    transform: translateX(-50%);
}

button:hover {
    background-color: transparent;
    color: white;
}

@media screen and (max-width: 700px) {
    .container {
        flex-direction: column;
    }

    #install,
    #feedback {
        width: calc(100% - 5rem);
        margin: 1rem;
        height: 40vh;
    }
}</style>