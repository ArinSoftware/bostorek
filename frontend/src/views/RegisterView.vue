<template>
  <section class="bg-bost-grey flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"
    style="height: calc(100vh - 357px);">

    <section-header header="Register" />

    <div class="w-full bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-500 md:mt-0 sm:w-1/2 lg:w-1/3">
      <div class="p-8 space-y-4 md:space-y-6 sm:p-8">
        <form class="space-y-8" @submit.prevent="registerUser">
          <div>
            <input v-model="username" type="text" name="username" id="username"
              class="bg-bost-grey border border-gray-300 text-gray-900 sm:text-sm rounded-full block w-full p-2.5" :class="{
                'border-red-500': isUsernameClicked && !isUsernameValid,
                'border-green-500': isUsernameClicked && isUsernameValid
              }" placeholder="username" autocomplete="off" @click="isUsernameClicked = true"
              @blur="isUsernameClicked = false">
            <p v-if="isUsernameClicked && !isUsernameValid" class="text-red-500 text-xs mt-1">
              {{ usernameValidationMessage }}
            </p>
          </div>
          <div>
            <input v-model="email" type="email" name="email" id="email" :class="{
              'border-red-500': isEmailClicked && !isEmailValid,
              'border-green-500': isEmailClicked && isEmailValid
            }" class="bg-bost-grey border border-gray-300 text-gray-900 sm:text-sm rounded-full block w-full p-2.5"
              placeholder="email@domain.com" autocomplete="off" @click="isEmailClicked = true"
              @blur="isEmailClicked = false">
            <p v-if="isEmailClicked && !isEmailValid" class="text-red-500 text-xs mt-1">
              {{ emailValidationMessage }}
            </p>
          </div>
          <div>
            <input v-model="password" type="password" name="password" id="password" placeholder="••••••••" :class="{
              'border-red-500': isPasswordClicked && !isPasswordValid,
              'border-green-500': isPasswordClicked && isPasswordValid
            }" class="bg-bost-grey border border-gray-300 text-gray-900 sm:text-sm rounded-full block w-full p-2.5"
              @click="isPasswordClicked = true" @blur="isPasswordClicked = false">
            <p v-if="isPasswordClicked && !isPasswordValid" class="text-red-500 text-xs mt-1">
              {{ passwordValidationMessage }}
            </p>
          </div>
          <button type="submit" :disabled="!isEmailValid || !isPasswordValid || !isUsernameValid"
            :class="{ 'opacity-50 cursor-not-allowed': !isEmailValid || !isPasswordValid || !isUsernameValid }"
            class="w-full bg-bost-green hover:bg-white text-white hover:text-bost-green border border-bost-green py-2.5 px-11 rounded-full transition duration-300 ease-in-out">
            Sign up
          </button>

        </form>
      </div>
    </div>

  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import { mapGetters, mapActions } from 'vuex'

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
      isUsernameClicked: false,
      isEmailClicked: false,
      isPasswordClicked: false
    }
  },
  computed: {
    ...mapGetters('auth', ['registerError', 'isRegistering']),
    isUsernameValid() {
      return this.username.length >= 4 && this.username.length <= 10;
    },
    isPasswordValid() {
      return this.password.length >= 4 && this.password.length <= 10;
    },
    usernameValidationMessage() {
      const length = this.username.length;
      if (length < 4) {
        return `Min 4 characters, ${4 - length} characters remaining.`;
      } else if (length > 10) {
        return `Max 10 characters, ${length - 10} characters exceeded.`;
      } else {
        return 'Username is valid.';
      }
    },
    passwordValidationMessage() {
      const length = this.password.length;
      if (length < 4) {
        return `Min 4 characters, ${4 - length} characters remaining.`;
      } else if (length > 10) {
        return `Max 10 characters, ${length - 10} characters exceeded.`;
      } else {
        return 'Password is valid.';
      }
    },
    isEmailValid() {
      // Use a regular expression to validate the email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(this.email);
    },
    emailValidationMessage() {
      return this.isEmailValid ? 'Email is valid.' : 'Please enter a valid email.';
    }
  },
  methods: {
    ...mapActions('auth', ['register']),
    registerUser() {
      this.register({ username: this.username, email: this.email, password: this.password }).then(() => {
        // Registration successful
        // Redirect to the LoginView.vue page
        this.$router.push({ name: 'Login' });
      })
        .catch(error => {
          // Registration failed
          // Handle the error, display an error message, etc.
          console.log("ERROR", error)
        });
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
</style>