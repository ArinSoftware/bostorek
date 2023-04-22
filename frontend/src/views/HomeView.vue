<template>
  <the-hero />
  <book-list />
</template>

<script>
import TheHero from '@/components/TheHero.vue';
import BookList from '@/components/books/BookList.vue';
export default {
  name: "HomeView",
  components: {
    TheHero, BookList
  },
}
</script>

<style lang="scss" scoped></style>