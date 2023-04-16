<script setup lang="ts">
import CountdownTimer from "../components/Countdown.vue"
import Support from "../components/Support.vue";
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
        <router-link to="/" class="homebtn">
            <img src="/images/home.webp">
        </router-link>
        <video loop autoplay src="https://artifactmod.online/background.mp4" id="background-video"></video>
        <div id="install">
            <h2 style="text-transform: uppercase;">Информация</h2>
            <ul>
                <li><p>В ОБТ будет только одна начальная локация - "Периметр".</p></li>
                <li><p>Должно хватить на несколько часов геймплея, смотря кто как играет и любуется пейзажами, наиграться хватит.</p></li>
                <li><p>Нам важно понять в правильном направлении мы двигаемся, или нужно что-то менять.</p></li>
            </ul>
            <hr>
            <h2 style="text-transform: uppercase;">Инструкция по установке</h2>
            <ul>
                <li>Установить чистую копию "Зов Припяти" с патчем "1.6.02".</li>
                <li>Разархивировать скачанный архив с модификацией в любое место на диске.</li>
                <li>В папке Artifact fragment открыть файл fsgame.ltx и поменять путь до оригинала игры на свой, аналогично этому: <i>C:\Games\S.T.A.L.K.E.R. Call of Pripyat</i><br><span><u>Менять нужно на такое расположение, где у ВАС находится оригинал игры.</u></span></li>
                <li>Запускать модификацию с помощью значка "Artifact START", при желании можно создать ярлык на рабочем столе.</li>
                <li>При уведомлении о том, что доступно новое обновление нажимать - <b>НЕТ</b></li>
            </ul>
            <hr>
            <h3 style="text-transform: uppercase;">Минимальные требования:</h3>
            <ul>
                <li>Процессор: Intel Core i5-2500 или AMD Ryzen 3 1200</li>
                <li>Видеокарта: NVIDIA GeForce GTX 960 или AMD Radeon R9 380</li>
                <li>Оперативная память: 6 Гбайт</li>
                <li>Место на диске: 20 Гбайт (предпочтительнее SSD)</li>
            </ul>
            <h3 style="text-transform: uppercase;">Рекомендуемые требования:</h3>
            <ul>
                <li>Процессор: Intel Core i5-6600K или AMD Ryzen 5 1600</li>
                <li>Видеокарта: NVIDIA GeForce GTX 1070 или AMD Radeon RX 5600 XT</li>
                <li>Оперативная память: 12 Гбайт</li>
                <li>Место на диске: 20 Гбайт (предпочтительнее SSD)</li>
            </ul>
            <hr>
            <h2 style="text-transform: uppercase;">Ссылки на загрузку</h2>
            <ul style="list-style-type: '»  ';">
                <li>Загрузить «ARTIFACT fragment» (финальная версия) <a href="https://artifactmod.online/Artifact fragment (final).7z">С наших серверов</a> [4.4 ГБ]</li>
                <li style="opacity: 0.7;">Загрузить «ARTIFACT fragment» (финальная версия) <a href="magnet:?xt=urn:btih:ZAWBC263WE7LYVTYKIHTYDHEAHXNZMRA&dn=Artifact%20fragment%20(final).7z&xl=4749394351&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce">Torrent</a> [4.4 ГБ]</li>
                <li style="opacity: 0.7;">Загрузить «ARTIFACT fragment» (финальная версия) с ФО: <a href="https://drive.google.com/file/d/1xs5C8Q5lXJh0mGEH76oyXeGCGWe7Zq-c/view" target="_blank">Google Drive</a> [4.4 ГБ]</li>
            </ul>
            <Support />
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

li {
    color: white;
    font-family: "Inter", sans-serif;
    margin: 0.4rem 0;
}

li > a {
    color: white;
    text-decoration: underline dotted;
}

li > span {
    font-size: 0.9em;
}

#background-video {
    position: fixed;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
    user-select: none;
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
    min-height: max-content;
}

#feedback {
    width: calc(40% - 3rem);
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(0.5rem);
    margin: 1rem;
    border-radius: 1.5rem;
    padding: 1.5rem;
    border: 2px rgba(255, 255, 255, 0.4) solid;
    min-height: max-content;
}

textarea {
    width: 100%;
    min-height: 25%;
    border-radius: 0.5rem;
    background: none;
    color: white;
    margin-bottom: 1rem;
    resize: none;
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

.homebtn {
    position: fixed;
    top: 0.4rem;
    left: 0.4rem;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.4rem;
    border-radius: 0.8rem;
    background-color: rgba(0, 0, 0, 0.2);
    border: 0.1rem rgba(255, 255, 255, 0.8) solid;
    backdrop-filter: blur(1rem);
    z-index: 10;
}

.homebtn > img {
    width: 100%;
    opacity: 0.8;
}



@media screen and (max-width: 700px) {
    .container {
        flex-direction: column;
    }
    .homebtn {
        display: none;
    }
    #install,
    #feedback {
        width: calc(100% - 5rem);
        margin: 1rem;
        min-height: 40vh;
    }
}</style>