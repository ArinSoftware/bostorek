<template>
  <div class="h-screen/2 bg-bost-gray flex items-center">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex-1">
        <h2 class="text-xl font-bold mb-2">Small Title</h2>
        <h1 class="text-5xl font-bold mb-4">For All Your Reading Needs</h1>
        <p class=" mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem
          deserunt quo quidem ad optio.</p>
        <button
          class="bg-bost-green hover:bg-white text-white hover:text-bost-green border border-bost-green py-2 px-8 rounded-full">
          Read More
        </button>
      </div>
      <div class="flex-1">
        <img src="../assets/images/slider-img.png" alt="your-image-alt" class="h-full mx-auto my-auto">
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Slider"
}
</script>

<style lang="scss" scoped></style>