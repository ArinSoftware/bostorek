<template>
  <nav class="bg-bost-blue py-5 px-4">
    <div class="container flex mx-auto items-center justify-between">
      <router-link class="text-white text-2xl font-bold" :to="{ name: 'Home' }">Bostorek</router-link>
      <ul class="flex">
        <li class="px-4 last:px-0 last:pl-4" v-for="menuItem in menuItems" :key="menuItem.text">
          <router-link :to="menuItem.link" class="px-3 py-3 last:px-0 last:pl-3 text-white">{{ menuItem.text
          }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainMenu",
  data() {
    return {
      menuItems: [
        { text: "Home", link: "/" },
        { text: "About", link: "/about" },
        { text: "Books", link: "/books" },
        { text: "Contact", link: "/contact" },
        { text: "Login", link: "/login" },
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>