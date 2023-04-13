<template>
  <nav class="bg-bost-blue py-5 px-4">
    <div class="container flex mx-auto items-center justify-between">
      <h1 class="text-white text-2xl font-bold">Bostorek</h1>
      <ul class="flex">
        <li class="px-4 last:px-0 last:pl-4" v-for="menuItem in menuItems" :key="menuItem">
          <a href="#" class="px-3 py-3 last:px-0 last:pl-3 text-white">{{ menuItem }}</a>
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
        "Home",
        "About",
        "Books",
        "Contact",
        "Login"
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>