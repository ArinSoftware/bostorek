<template>
  <main-menu />
  <the-hero />
  <book-list />
</template>

<script>
import MainMenu from '@/components/MainMenu.vue';
import TheHero from "@/components/TheHero.vue";
import BookList from '@/components/books/BookList.vue';

export default {
  name: "App",
  components: {
    MainMenu, TheHero, BookList
  }
}
</script>
