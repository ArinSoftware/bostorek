<template>
  <div class="text-center mb-8">
    <h2 class="text-3xl font-semibold text-bost-black">
      {{ header }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "SectionHeader",
  props: {
    header: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>