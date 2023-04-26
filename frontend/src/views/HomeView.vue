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


<!-- BOOKLIST
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    <book-item v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>

<script>
import BookItem from '@/components/books/BookItem.vue';
export default {
  name: "BookList",
  components: { BookItem },
  props: {
    books: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped></style>

BOOKVIEW

<template>
  <h1>Book</h1>
  <book-list :books="allBooks"></book-list>
</template>

<script>
import BookList from '@/components/books/BookList.vue';

export default {
  name: 'BookView',
  components: { BookList },
  computed: {
    allBooks() {
      return this.$store.state.books;
    }
  }
}
</script>

<style lang="scss" scoped></style>

HomeView

<template>
  <h1>Home</h1>
  <book-list :books="lastFourBooks"></book-list>
</template>

<script>
import BookList from '@/components/books/BookList.vue';

export default {
  name: 'HomeView',
  components: { BookList },
  computed: {
    lastFourBooks() {
      return this.$store.state.books.slice(0, 4);
    }
  }
}
</script>

<style lang="scss" scoped></style> -->