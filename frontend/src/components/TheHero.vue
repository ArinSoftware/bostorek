<template>
  <div class="bg-bost-grey flex items-center" style="height: calc(100vh - 56px);">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex-1 p-8">
        <h2 class="text-xl font-bold mb-2">Small Title</h2>
        <h1 class="text-5xl font-bold mb-4">For All Your Reading Needs</h1>
        <p class=" mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem
          deserunt quo quidem ad optio.</p>
        <primary-button text="Read More" />
      </div>
      <div class="flex-1 p-8">
        <img src="../assets/images/slider-img.png" alt="your-image-alt" class="h-full mx-auto my-auto">
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryButton from './PrimaryButton.vue';

export default {
  name: "TheHero",
  components: {
    PrimaryButton
  }
}
</script>

<style lang="scss" scoped></style>