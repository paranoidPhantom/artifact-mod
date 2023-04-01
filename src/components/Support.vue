<template>
    <hr>
    <h1>Поддержать авторов</h1>
    <div class="methods">
        <div class="sbercard">
            <img src="https://www.banki.ru/upload/iblock/d22/trebb.png">
            <h4>4276 4413 1099 7098</h4>
        </div>
        <a class="boosty" href="https://boosty.to/artifactmod" target="_blank">
            <img src="https://media.lpgenerator.ru/images/194404/white_RMtErSo.png" alt="">
        </a>
    </div>
</template>

<style scoped>
h1 {
    margin: 2rem 0;
    text-align: center;
}

.methods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}
.sbercard {
    position: relative;
    width: fit-content;
    height: fit-content;
    cursor: pointer;
}

.sbercard>img {
    width: 10rem;
    transition: all 0.3s;
    filter: brightness(0.7);
    user-select: none;
}

.sbercard:hover>img {
    width: 12rem;
    filter: brightness(0.4);
}

.sbercard:hover>h4 {
    transform: translate(-50%, -50%) scale(1.2);
}

.sbercard>h4 {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    font-size: 0.6rem;
    transition: all 0.3s;
}

.boosty>img {
    width: 10rem;
    transition: all 0.3s;
}

.boosty:hover>img {
    width: 12rem;
}
</style>