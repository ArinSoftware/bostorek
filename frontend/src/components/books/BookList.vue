<template>
  <section class="bg-white py-32">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-semibold text-bost-black">
          Latest Books
        </h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="relative">
            <img src="@/assets/images/book_small.jpg" alt="" class="w-full">
            <div
              class="absolute left-4 bottom-0 px-6 py-1 text-white bg-bost-blue rounded-full border-2 border-white flex justify-center items-center text-center transform translate-y-1/2">
              <h4 class="text-white text-lg font-semibold">
                <span>
                  19 January 2021
                </span>
              </h4>
            </div>
          </div>
          <div class="p-4">
            <h5 class="text-lg font-semibold text-bost-black mb-2 mt-2">
              Eius, dolor? Vel velit sed doloremque
            </h5>
            <p class="text-bost-black leading-relaxed mb-4">
              Incidunt magni explicabo ullam ipsa quo consequuntur eveniet illo? Aspernatur nam dolorem a neque? Esse
              eaque dolores hic debitis cupiditate, ad beatae voluptatem numquam dignissimos ab porro
            </p>
            <a href="" class="text-blue-500 font-semibold hover:underline">
              Read More
            </a>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="relative">
            <img src="@/assets/images/b1.jpg" alt="" class="w-full">
            <div class="absolute inset-0 flex items-end justify-center">
              <h4 class="text-white text-lg font-semibold bg-blue-500 py-2 px-4">
                <span>
                  19 January 2021
                </span>
              </h4>
            </div>
          </div>
          <div class="p-4">
            <h5 class="text-lg font-semibold text-gray-800 mb-2">
              Eius, dolor? Vel velit sed doloremque
            </h5>
            <p class="text-gray-600 leading-relaxed mb-4">
              Incidunt magni explicabo ullam ipsa quo consequuntur eveniet illo? Aspernatur nam dolorem a neque? Esse
              eaque dolores hic debitis cupiditate, ad beatae voluptatem numquam dignissimos ab porro
            </p>
            <a href="" class="text-blue-500 font-semibold hover:underline">
              Read More
            </a>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="relative">
            <img src="images/b1.jpg" alt="" class="w-full">
            <div class="absolute inset-0 flex items-end justify-center">
              <h4 class="text-white text-lg font-semibold bg-blue-500 py-2 px-4">
                <span>
                  19 January 2021
                </span>
              </h4>
            </div>
          </div>
          <div class="p-4">
            <h5 class="text-lg font-semibold text-gray-800 mb-2">
              Eius, dolor? Vel velit sed doloremque
            </h5>
            <p class="text-gray-600 leading-relaxed mb-4">
              Incidunt magni explicabo ullam ipsa quo consequuntur eveniet illo? Aspernatur nam dolorem a neque? Esse
              eaque dolores hic debitis cupiditate, ad beatae voluptatem numquam dignissimos ab porro
            </p>
            <a href="" class="text-blue-500 font-semibold hover:underline">
              Read More
            </a>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="relative">
            <img src="images/b2.jpg" alt="" class="w-full">
            <div class="absolute inset-0 flex items-end justify-center">
              <h4 class="text-white text-lg font-semibold bg-blue-500 py-2 px-4">
                <span>
                  19 January 2021
                </span>
              </h4>
            </div>
          </div>
          <div class="p-4">
            <h5 class="text-lg font-semibold text-gray-800 mb-2">
              Minus aliquid alias porro iure fuga
            </h5>
            <p class="text-gray-600 leading-relaxed mb-4">
              Officiis veritatis id illo eligendi repellat facilis animi adipisci praesentium. Tempore ab provident porro
              illo ex obcaecati deleniti enim sequi voluptas at. Harum veniam eos nisi distinctio! Porro, reiciendis eius.
            </p>
            <a href="" class="text-blue-500 font-semibold hover:underline">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BookList"
}
</script>

<style lang="scss" scoped></style>