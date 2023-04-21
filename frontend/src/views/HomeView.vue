<template>
  <div>
    <the-hero />
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import TheHero from '../components/TheHero.vue';
export default {
  name: "HomeView",
  components: {
    TheHero
  },
  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  }
}
</script>

<style lang="scss" scoped></style>