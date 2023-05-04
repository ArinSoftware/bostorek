<template>
  <the-hero />
  <section>
    <div class="container mx-auto py-16 px-4">
      <section-header header="Latest Books" />
      <book-list />
    </div>
  </section>

  <section class="bg-bost-grey">
    <div class="container mx-auto py-16 px-4">
      <section-header header="Favorite Comments" />
      <comment-list />
    </div>
  </section>
</template>

<script>
import TheHero from '@/components/TheHero.vue';
import BookList from '@/components/books/BookList.vue';
import CommentList from '@/components/comments/CommentList.vue';
import SectionHeader from '@/components/SectionHeader.vue';
export default {
  name: "HomeView",
  components: {
    TheHero, BookList, CommentList, SectionHeader
  },
}
</script>

<style lang="scss" scoped></style>
