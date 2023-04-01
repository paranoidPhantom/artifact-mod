<script setup lang="ts">

</script>

<template>
    <footer>
        <span>© 2023 ARTIFACT</span>
        <div class="links">
            <a href="https://vk.com/artifactmod" target="_blank">
                <img style="transform: translateY(0.1rem);" src="/images/logos/vk.webp" alt="Группа VK" >
            </a>
            <a href="https://ap-pro.ru/forums/topic/3536-artifact-mod/" target="_blank">
                <img style="transform: translateY(0.1rem);" src="/images/logos/appro.webp" alt="AP-PRO">
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
    background-color: rgba(0, 0, 0, 1);
    backdrop-filter: blur(0.5rem);
}
span {
    opacity: 0.9;
    margin-left: 1rem;
}
.links {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-right: 1rem;
}
.links img {
    height: 1.5rem;
    transition: all 0.3s;
}
.links img:hover {
    filter: brightness(0.8);
}
.links a {
    padding: 0.2rem 0.3rem;
    transition: all 0.3s;
    border-radius: 0.3rem;
}
.links a:hover {
    box-shadow: 0 0 2rem rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, 0.1);
}
</style>