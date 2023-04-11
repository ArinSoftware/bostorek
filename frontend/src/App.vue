<template>
  <div>
    <main-menu />
    <slider />
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue';;
import Slider from "./components/Slider.vue"

export default {
  name: "App",
  components: {
    MainMenu, Slider
  }
}
</script>
