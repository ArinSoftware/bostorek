<template>
  <section class="bg-white py-32 h-screen">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-semibold text-bost-black">
          Latest Books
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <book-item v-for="book in books" :key="book.id" :book="book" />
      </div>
    </div>
  </section>
</template>

<script>
import BookItem from '@/components/books/BookItem.vue';
export default {
  name: "BookList",
  components: { BookItem },
  computed: {
    books() {
      console.log("this.$store.state.books", this.$store.state.books)
      return this.$store.state.books
    }
  },
  mounted() {
    this.$store.dispatch('fetchBooks')
  }
}
</script>

<style lang="scss" scoped></style>