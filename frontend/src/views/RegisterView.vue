<template>
  <section class="bg-bost-grey flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"
    style="height: calc(100vh - 357px);">

    <section-header header="Register" />

    <div class="w-full bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-500 md:mt-0 sm:w-1/2 lg:w-1/3">
      <div class="p-8 space-y-4 md:space-y-6 sm:p-8">
        <form class="space-y-8" @submit.prevent="registerUser">
          <div>
            <input v-model="username" type="text" name="username" id="username"
              class="bg-bost-grey border border-gray-300 text-gray-900 sm:text-sm rounded-full block w-full p-2.5"
              placeholder="username" autocomplete="off">
          </div>
          <div>
            <input v-model="email" type="email" name="email" id="email"
              class="bg-bost-grey border border-gray-300 text-gray-900 sm:text-sm rounded-full block w-full p-2.5"
              placeholder="email@domain.com" autocomplete="off">
          </div>
          <div>
            <input v-model="password" type="password" name="password" id="password" placeholder="••••••••"
              class="bg-bost-grey border border-gray-300 text-gray-900 sm:text-sm rounded-full block w-full p-2.5">
          </div>
          <button type="submit"
            class="w-full bg-bost-green hover:bg-white text-white hover:text-bost-green border border-bost-green py-2.5 px-11 rounded-full transition duration-300 ease-in-out">
            Sign up
          </button>

          <h1>STATUS:{{ status }}</h1>
        </form>
      </div>
    </div>

  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';

export default {
  name: "RegisterView",
  components: {
    SectionHeader
  },
  data() {
    return {
      email: "",
      username: "",
      password: "",
    }
  },
  computed: {
    status() {
      return this.$store.state.auth.status;
    },
  },
  methods: {
    registerUser() {
      this.$store.dispatch("auth/register", { username: this.username, email: this.email, password: this.password })
    }
  }
}
</script>

<style lang="scss" scoped></style>