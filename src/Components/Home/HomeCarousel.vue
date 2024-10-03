<template>
    <div class="relative w-full overflow-hidden">
      <!-- Outer carousel wrapper -->
      <div
        class="flex transition-transform duration-1000 ease-linear"
        :style="getTransformStyle"
      >
        <!-- Cloned last image at the start for seamless looping -->
        <div class="flex-shrink-0 w-full md:w-1/3 p-2">
          <img
            :src="images[images.length - 1]"
            class="rounded-lg w-full h-full object-cover"
            alt="Event Image"
          />
        </div>
  
        <!-- Real carousel items -->
        <div
          v-for="(image, index) in images"
          :key="index"
          class="flex-shrink-0 w-full md:w-1/3 p-2"
        >
          <img
            :src="image"
            class="rounded-lg w-full h-full object-cover"
            alt="Event Image"
          />
        </div>
  
        <!-- Cloned first image at the end for seamless looping -->
        <div class="flex-shrink-0 w-full md:w-1/3 p-2">
          <img
            :src="images[0]"
            class="rounded-lg w-full h-full object-cover"
            alt="Event Image"
          />
        </div>
      </div>
  
      <!-- Carousel navigation buttons (left/right) -->
      <div class="absolute inset-0 flex justify-between items-center">
        <button
          @click="prev"
          class="bg-black text-white px-4 py-2 rounded-full opacity-75 hover:opacity-100 ml-2"
        >
          ‹
        </button>
        <button
          @click="next"
          class="bg-black text-white px-4 py-2 rounded-full opacity-75 hover:opacity-100 mr-2"
        >
          ›
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import img from "/public/img/gallery-two.ca94655463cd02e05844.png";
  
  export default {
    data() {
      return {
        currentIndex: 1, // Start at the first real image
        images: [
          img,
          img,
          img,
          img,
          img,
          img,
          img,
        ],
        intervalId: null,
      };
    },
    mounted() {
      // Auto-slide for small screens
      this.startAutoSlide();
    },
    beforeDestroy() {
      this.stopAutoSlide();
    },
    computed: {
      getTransformStyle() {
        const isSmallScreen = window.innerWidth < 768;
        const itemWidthPercentage = isSmallScreen ? 100 : 100 / 3; // Show 1 image on small screens, 3 on large
        return `transform: translateX(-${this.currentIndex * itemWidthPercentage}%);`;
      },
    },
    methods: {
      startAutoSlide() {
        // Auto-slide every 4 seconds for small screens
        this.intervalId = setInterval(() => {
          this.next();
        }, 4000);
      },
      stopAutoSlide() {
        clearInterval(this.intervalId);
      },
      next() {
        const isSmallScreen = window.innerWidth < 768;
        const totalSlides = this.images.length;
  
        if (isSmallScreen) {
          // For small screens, advance one image at a time
          this.currentIndex += 1;
  
          if (this.currentIndex === totalSlides + 1) {
            // If we've reached the end, transition back to the first image
            setTimeout(() => {
              this.currentIndex = 1; // Move instantly to the first real image
            }, 1000); // Delay to let the transition complete
          }
        } else {
          // For larger screens, advance in steps of 3
          this.currentIndex += 1;
  
          if (this.currentIndex === totalSlides + 1) {
            setTimeout(() => {
              this.currentIndex = 1;
            }, 1000);
          }
        }
      },
      prev() {
        const totalSlides = this.images.length;
  
        this.currentIndex -= 1;
  
        if (this.currentIndex === 0) {
          // If we've reached the start, transition to the last real image
          setTimeout(() => {
            this.currentIndex = totalSlides; // Move instantly to the last real image
          }, 1000);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional: Add CSS for smoother "water-like" animation feel */
  .flex {
    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  </style>
  