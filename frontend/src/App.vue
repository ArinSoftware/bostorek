<template>
  <main-menu />
  <router-view />
</template>

<script>
import MainMenu from '@/components/MainMenu.vue';

export default {
  name: "App",
  components: { MainMenu }
}
</script>
