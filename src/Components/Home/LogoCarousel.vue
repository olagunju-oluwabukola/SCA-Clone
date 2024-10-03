<template>
    <div class="relative w-full overflow-hidden">
      <h2 class="text-center font-bold text-lg mb-6">Our Partners</h2>
      
      <!-- Carousel container -->
      <div
        class="grid grid-cols-3 md:grid-cols-9 transition-transform duration-1000 ease-linear"
        :style="getTransformStyle"
      >
        <!-- Cloned last card for smooth looping -->
        <div class="flex-shrink-0 p-2">
          <div class="bg-gray-200 rounded-lg h-24 flex items-center justify-center">
            <img :src="cards[cards.length - 1]" class="w-16 h-16 object-contain" alt="Partner Logo" />
          </div>
        </div>
  
        <!-- Real cards -->
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="flex-shrink-0 p-2"
        >
          <div class="bg-gray-200 rounded-lg h-24 flex items-center justify-center">
            <img :src="card" class="w-16 h-16 object-contain" alt="Partner Logo" />
          </div>
        </div>
  
        <!-- Cloned first card for smooth looping -->
        <div class="flex-shrink-0 p-2">
          <div class="bg-gray-200 rounded-lg h-24 flex items-center justify-center">
            <img :src="cards[0]" class="w-16 h-16 object-contain" alt="Partner Logo" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 1, // Start at the first real card
        cards: [
          "https://via.placeholder.com/100/5e5e5e?text=Card+1",
          "https://via.placeholder.com/100/5e5e5e?text=Card+2",
          "https://via.placeholder.com/100/5e5e5e?text=Card+3",
          "https://via.placeholder.com/100/5e5e5e?text=Card+4",
          "https://via.placeholder.com/100/5e5e5e?text=Card+5",
          "https://via.placeholder.com/100/5e5e5e?text=Card+6",
          "https://via.placeholder.com/100/5e5e5e?text=Card+7",
          "https://via.placeholder.com/100/5e5e5e?text=Card+8",
          "https://via.placeholder.com/100/5e5e5e?text=Card+9",
          "https://via.placeholder.com/100/5e5e5e?text=Card+10"
        ],
        intervalId: null,
      };
    },
    mounted() {
      this.startAutoSlide();
    },
    beforeDestroy() {
      this.stopAutoSlide();
    },
    computed: {
      getTransformStyle() {
        const isSmallScreen = window.innerWidth < 768;
        const itemWidthPercentage = isSmallScreen ? 100 / 3 : 100 / 9; // 3 cards for small screens, 9 for large
        return `transform: translateX(-${this.currentIndex * itemWidthPercentage}%);`;
      },
    },
    methods: {
      startAutoSlide() {
        this.intervalId = setInterval(() => {
          this.next();
        }, 3000); // Slide every 3 seconds
      },
      stopAutoSlide() {
        clearInterval(this.intervalId);
      },
      next() {
        const totalSlides = this.cards.length;
        this.currentIndex += 1;
  
        if (this.currentIndex === totalSlides + 1) {
          setTimeout(() => {
            this.currentIndex = 1; // Loop back to the first card
          }, 1000); // Delay for smooth transition
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .grid {
    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  </style>
  