<template>
  <div>
    <h1>Welcome, {{ currentUser.username }}</h1>
    <!-- Display other user details as needed -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "DashboardView",
  computed: {
    ...mapGetters('auth', ['currentUser'])
  },
}
</script>

<style lang="scss" scoped></style>