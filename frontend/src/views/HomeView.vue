<template>
  <the-hero />

  <div class="container mx-auto my-16 px-4">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-semibold text-bost-black">
        Latest Books
      </h2>
    </div>
    <book-list />
  </div>
  <comment-list />
</template>

<script>
import TheHero from '@/components/TheHero.vue';
import BookList from '@/components/books/BookList.vue';
import CommentList from '../components/comments/CommentList.vue';
export default {
  name: "HomeView",
  components: {
    TheHero, BookList, CommentList
  },
}
</script>

<style lang="scss" scoped></style>