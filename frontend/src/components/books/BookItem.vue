<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-500">
    <div class="relative">
      <img src="@/assets/images/book_small.jpg" alt="" class="w-full">
      <div
        class="absolute left-4 bottom-0 px-6 py-1 text-white bg-bost-blue rounded-full border-2 border-white flex justify-center items-center text-center transform translate-y-1/2">
        <h4 class="text-white text-lg font-semibold">
          <span>
            {{ book.updatedAt }}
          </span>
        </h4>
      </div>
    </div>
    <div class="p-4">
      <h5 class="text-lg font-bold text-bost-black mb-1 mt-4">
        {{ book.title }} - {{ book.author }}
      </h5>
      <p class="text-bost-black leading-relaxed mb-4">
        Incidunt magni explicabo ullam ipsa quo consequuntur eveniet illo? Aspernatur nam dolorem a neque? Esse
        eaque dolores hic debitis cupiditate, ad beatae voluptatem numquam dignissimos ab porro
      </p>
      <a href="" class="text-bost-green hover:font-semibold">
        Read More
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookItem",
  props: {
    book: Object
  }
}
</script>

<style lang="scss" scoped></style>