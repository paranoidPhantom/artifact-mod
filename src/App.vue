<script setup lang="ts">

</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
  <footer>© 2023 ARTIFACT</footer>
</template>

<style scoped>


/* */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  filter: blur(2rem);
}
</style>