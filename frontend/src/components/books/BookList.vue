<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    <book-item v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>

<script>
import BookItem from '@/components/books/BookItem.vue';
import { mapGetters } from 'vuex';

export default {
  name: "BookList",
  components: { BookItem },
  computed: {
    ...mapGetters('book', ['getBooks']),
    books() {
      return this.getBooks;
    },
  },

  mounted() {
    this.$store.dispatch('book/fetchBooks')
  }
}
</script>

<style lang="scss" scoped></style>