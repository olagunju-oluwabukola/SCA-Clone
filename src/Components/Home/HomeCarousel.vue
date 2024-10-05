<template>
  <div class="relative overflow-hidden mx-5 md:mx-20">
    <div
      class="flex  transition-transform duration-1000 ease-linear"
      :style="getTransformStyle"
      @transitionend="handleTransitionEnd"
    >
      
      <div
        v-for="(image, index) in displayImages"
        :key="index"
        class="flex-shrink-0 w-full md:w-1/3 p-2 "
      >
        <img
          :src="image"
          class="rounded-[40px]  h-full object-cover"
          alt="Event Image"
        />
      </div>
    </div>

    <div class="absolute inset-0 flex justify-between items-center">
      <button
        @click="prev"
        class="bg-white  text-gray-500 px-4 py-2 rounded-full  hover:opacity-100 ml-2"
      >
        ‹
      </button>
      <button
        @click="next"
        class="bg-white text-gray-500 px-4 py-2 rounded-full hover:opacity-100 mr-"
      >
        ›
      </button>
    </div>
  </div>
</template>

<script>
import img from "/img/ada.jpg";
import img1 from "/img/carouselimg2.png";
import img2 from "/img/carouselImage1.jpg";

export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        img,
        img1,
        img2,
       
      ],
      totalSlides: 0,
      transition: true,
    };
  },
  computed: {
    displayImages() {
      
      return [...this.images, ...this.images.slice(0, 3)];
    },
    getTransformStyle() {
      const isSmallScreen = window.innerWidth < 768;
      const itemWidthPercentage = isSmallScreen ? 100 : 100 / 3;
      const offset = this.currentIndex * itemWidthPercentage;

      return `transform: translateX(-${offset}%); transition: ${
        this.transition ? 'transform 1s ease-in-out' : 'none'
      };`;
    },
  },
  mounted() {
    this.totalSlides = this.images.length;
    this.startAutoSlide();
  },
  beforeDestroy() {
    this.stopAutoSlide();
  },
  methods: {
    startAutoSlide() {
      this.intervalId = setInterval(() => {
        this.next();
      }, 4000);
    },
    stopAutoSlide() {
      clearInterval(this.intervalId);
    },
    next() {
      if (this.currentIndex < this.totalSlides) {
        this.currentIndex++;
      } else {
        
        this.transition = false;
        this.currentIndex = 1; 
      }
    },
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        
        this.transition = false;
        this.currentIndex = this.totalSlides;
      }
    },
    handleTransitionEnd() {
      
      if (this.currentIndex === this.totalSlides) {
        this.transition = true;
      }
    },
  },
};
</script>

<style scoped>
.flex {
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
</style>
