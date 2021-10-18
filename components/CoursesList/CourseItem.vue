<template>
    <article class="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
        <div class="relative w-full h-80 md:h-64 lg:h-44">
            <img src="https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg"
                alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                class="w-full h-full object-center object-cover">
        </div>
        <div class="px-3 py-4">
            <h3 class="text-sm text-gray-500 pb-2">
                <a class="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
                    <span class="absolute inset-0"></span>
                    Basic Level
                </a>
            </h3>
            <p
                class="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
    </article>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    courseData: {
    }
  },
})
</script>