<script setup lang="ts">
import footercomp from "./components/footer.vue"
</script>

<template>
  <router-view v-slot="{ Component }">
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
  transition: all 0.2s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  filter: blur(2rem);
}
</style>