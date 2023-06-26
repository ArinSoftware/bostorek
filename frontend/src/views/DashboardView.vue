<template>
  <div>
    <h1>Welcome, {{ currentUser }}</h1>
    <p>{{ getUserBooks }}</p>
    <!-- Display other user details as needed -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "DashboardView",
  computed: {
    ...mapGetters('auth', ['currentUser']),
    ...mapGetters('book', ['getUserBooks']),
  },
  created() {
    this.$store.dispatch('book/fetchUserBooks');
  },
};
</script>

<style lang="scss" scoped></style>
