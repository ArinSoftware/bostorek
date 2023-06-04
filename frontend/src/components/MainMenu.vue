<template>
  <nav class="bg-bost-blue py-5 px-4">
    <div class="container flex mx-auto items-center justify-between">
      <router-link class="text-white text-2xl font-bold" :to="{ name: 'Home' }">Bostorek</router-link>
      <ul class="flex">
        <template v-for="menuItem in visibleMenuItems">
          <li class="px-4 last:px-0 last:pl-4" :key="menuItem.text" v-if="menuItem.visible">
            <router-link v-if="menuItem.text !== 'Logout'" :to="menuItem.link"
              class="px-3 py-3 last:px-0 last:pl-3 text-white">
              {{ menuItem.text }}
            </router-link>
            <a v-else @click="handleLogout" class="px-3 py-3 last:px-0 last:pl-3 text-white cursor-pointer">
              {{ menuItem.text }}
            </a>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "MainMenu",
  computed: {
    ...mapGetters('auth', ['currentUser']),
    visibleMenuItems() {
      const isLoggedIn = this.currentUser !== null;
      return this.menuItems.map(menuItem => {
        if ((menuItem.text === 'Login' || menuItem.text === 'Register') && isLoggedIn) {
          menuItem.visible = false;
        } else if ((menuItem.text === 'Dashboard' || menuItem.text === 'Logout') && !isLoggedIn) {
          menuItem.visible = false;
        } else {
          menuItem.visible = true;
        }
        return menuItem;
      });
    }
  },
  data() {
    return {
      menuItems: [
        { text: "Home", link: "/", visible: true },
        { text: "About", link: "/about", visible: true },
        { text: "Dashboard", link: "/dashboard", visible: true },
        { text: "Login", link: "/login", visible: true },
        { text: "Register", link: "/register", visible: true },
        { text: "Logout", link: "/logout", visible: true },
      ]
    }
  },
  methods: {
    ...mapActions('auth', ['logout']),
    handleLogout() {
      // Call the logout action
      this.logout();

      // Use this.$router.push to navigate to the home page
      this.$router.push({ name: 'Home' });
    }
  }
}
</script>

<style lang="scss" scoped></style>
