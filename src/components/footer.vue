<script setup lang="ts">

</script>

<template>
    <footer>
        <span>© 2023 ARTIFACT</span>
        <a href="https://paranoidphantom.vercel.app" target="_blank">
            <img src="/images/web-design.webp" alt="Сайт разработал" title="Сайт разработал paranoidPhantom" >
        </a>
        <div class="links">
            <a href="https://vk.com/artifactmod" target="_blank">
                <img src="/images/logos/vk.webp" alt="Группа VK" >
            </a>
            <a href="https://ap-pro.ru/forums/topic/3536-artifact-mod/" target="_blank">
                <img src="/images/logos/appro.webp" alt="AP-PRO">
            </a>
            <a href="https://www.moddb.com/mods/artifact-mod1" target="_blank">
                <img src="/images/logos/moddb.webp" alt="ModDB">
            </a>
        </div>
    </footer>
</template>

<style scoped>
footer {
    min-height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 0.5rem 0.6rem rgba(0, 0, 0, 0.5) inset;
    backdrop-filter: none;
}
span {
    opacity: 0.9;
    margin-left: 1rem;
    font-weight: 500;
}
.links {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-right: 1rem;
}
img {
    height: 1.5rem;
    transition: all 0.3s ease-in-out;
    transform: none;
    z-index: 10;
}
.links a {
    padding: 0.2rem 0.3rem;
    transition: all 0.3s;
    border-radius: 0.3rem;
}


.links a:hover > img {
    filter: brightness(0.8);
    transform: translateY(-50%);
}
</style>