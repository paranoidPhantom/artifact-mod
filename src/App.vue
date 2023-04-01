<script setup lang="ts">
import footercomp from "./components/footer.vue"

const playAmbient = () => {
  const audio = document.querySelector("audio")
  if (audio) { audio.play() }
}
</script>

<template>
  <audio src="/ambient.mp3" autoplay loop></audio>
  <router-view v-slot="{ Component }" @click="playAmbient">
    <transition name="slide" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
  <footercomp />
</template>

<style scoped>


/* */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.15s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  filter: blur(5rem);
}
</style>