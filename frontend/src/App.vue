<template>
  <main-menu />
  <router-view />
  <the-footer />
</template>

<script>
import MainMenu from '@/components/MainMenu.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: "App",
  components: { MainMenu, TheFooter }
}
</script>

