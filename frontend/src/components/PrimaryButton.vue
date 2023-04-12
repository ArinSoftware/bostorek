<template>
  <button
    class="bg-bost-green hover:bg-white text-white hover:text-bost-green border border-bost-green py-2.5 px-11 rounded-full transition duration-300 ease-in-out">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: {
    text: {
      type: String,
      default: ''
    }
  },
}
</script>

<style lang="scss" scoped></style>