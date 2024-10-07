<template>
  <div class="relative overflow-hidden mx-5 md:mx-20">
    <div
      class="flex transition-transform duration-1000 ease-linear"
      :style="getTransformStyle"
      @transitionend="handleTransitionEnd"
    >
      <div
        v-for="(image, index) in displayImages"
        :key="index"
        class="flex-shrink-0 w-full md:w-1/3 p-2"
      >
        <img
          :src="image"
          class="rounded-[40px] h-full object-cover"
          alt="Event Image"
        />
      </div>
    </div>

    <div class="absolute inset-0 flex justify-between items-center">
      <button
        @click="prev"
        class="bg-white text-gray-500 px-4 py-2 rounded-full hover:opacity-100 ml-2"
      >
        ‹
      </button>
      <button
        @click="next"
        class="bg-white text-gray-500 px-4 py-2 rounded-full hover:opacity-100 mr-2"
      >
        ›
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import img from '/img/ada.jpg';
import img1 from '/img/carouselimg2.png';
import img2 from '/img/carouselImage1.jpg';

export default {
  setup() {
    const currentIndex = ref(0);
    const images = ref([img, img1, img2]);
    const totalSlides = ref(images.value.length);
    const transition = ref(true);
    let intervalId = null;

    const displayImages = computed(() => {
      return [...images.value, ...images.value.slice(0, 3)];
    });

    const getTransformStyle = computed(() => {
      const isSmallScreen = window.innerWidth < 768;
      const itemWidthPercentage = isSmallScreen ? 100 : 100 / 3;
      const offset = currentIndex.value * itemWidthPercentage;
      return `transform: translateX(-${offset}%); transition: ${
        transition.value ? 'transform 1s ease-in-out' : 'none'
      };`;
    });

    const startAutoSlide = () => {
      intervalId = setInterval(() => {
        next();
      }, 4000);
    };

    const stopAutoSlide = () => {
      clearInterval(intervalId);
    };

    const next = () => {
      if (currentIndex.value < totalSlides.value) {
        currentIndex.value++;
      } else {
        transition.value = false;
        currentIndex.value = 1;
      }
    };

    const prev = () => {
      if (currentIndex.value > 0) {
        currentIndex.value--;
      } else {
        transition.value = false;
        currentIndex.value = totalSlides.value;
      }
    };

    const handleTransitionEnd = () => {
      if (currentIndex.value === totalSlides.value) {
        transition.value = true;
      }
    };

    onMounted(() => {
      startAutoSlide();
    });

    onBeforeUnmount(() => {
      stopAutoSlide();
    });

    return {
      currentIndex,
      displayImages,
      getTransformStyle,
      next,
      prev,
      handleTransitionEnd,
    };
  },
};
</script>

<style scoped>
.flex {
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
</style>
