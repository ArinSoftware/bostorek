<template>
  <main-menu />
  <the-hero />
</template>

<script>
import MainMenu from '@/components/MainMenu.vue';
import TheHero from "@/components/TheHero.vue";

export default {
  name: "App",
  components: {
    MainMenu, TheHero
  }
}
</script>
