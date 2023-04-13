<template>
  <section class="bg-white py-32 h-screen">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-semibold text-bost-black">
          Latest Books
        </h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <book-item />
        <book-item />
        <book-item />
        <book-item />
      </div>
    </div>
  </section>
</template>

<script>
import BookItem from '@/components/books/BookItem.vue';
export default {
  name: "BookList",
  components: { BookItem }
}
</script>

<style lang="scss" scoped></style>