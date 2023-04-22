<template>
  <footer class="bg-bost-blue pt-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-left lg:text-left">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl text-white">Get In Touch!</h4>
          <h5 class="text-lg mt-0 mb-2 text-white">
            Find us on any of these platforms, we respond 1-2 business days.
          </h5>
          <div class="mt-6 lg:mb-0 mb-6">
            <button
              class="bg-white text-bost-green shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </button>
            <button
              class="bg-white text-bost-green shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button">
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </button>
            <button
              class="bg-white text-bost-green shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </button>
            <button
              class="bg-white text-bost-green shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </button>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <ul class="list-unstyled">
                <li v-for="menuItem in menuItems" :key="menuItem.text">
                  <router-link class="text-white hover:text-bost-green block pb-2" :to="menuItem.link">
                    {{ menuItem.text }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-4 border-bost-grey">
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-bost-grey font-semibold mb-4">
            NO © Copyright
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
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