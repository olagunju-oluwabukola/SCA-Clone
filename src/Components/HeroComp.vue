<template>
  <section class="bg-[#f0cde1]">

    <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-5xl leading-normal px-4 md:px-0 md:text-6xl font-bold text-center mb-4">
      Empowering Women In Tech Across
    </h1>

    <div class="relative inline-block">
      
      <h1 class="text-4xl md:text-6xl font-bold text-black px-4 py-1">Africa</h1>
      
      <svg class="absolute inset-0 w-full h-full" viewBox="0 0 350 100" xmlns="http://www.w3.org/2000/svg">
      
        <path
          d="M10 50 C50 -30, 300 -30, 340 50 C300 130, 50 130, 10 50"
          stroke="#D11A6B"
          stroke-width="3"
          fill="none"
          stroke-linecap="round"
        />
        
        <path
          d="M0 55 C40 -40, 310 -40, 350 55 C310 150, 40 150, 0 55"
          stroke="#D11A6B"
          stroke-width="3"
          fill="none"
          stroke-linecap="round"
        />
      </svg>
    </div>        

    <p class="mt-4 text-sm md:text-xl text-center max-w-xl px-4 md:px-0">
      She Code Africa is a registered non-profit organization dedicated to
      empowering and celebrating girls and women in technology across Africa.
    </p>

    <div class="mt-8 flex flex-col sm:flex-row gap-4">
      <button
        class="bg-[#b70569] hover:bg-white border hover:text-[#b70569] hover:border-[#b70569] text-white font-bold py-2 px-6 rounded-lg flex"
      >
        Become a Member
        <svg
            xmlns="http://www.w3.org/2000/svg"
            :class=" 'rotate-250' "
            class="h-5 w-5 transform transition-transform duration-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.292 7.707a1 1 0 011.415 0L10 11l3.293-3.293a1 1 0 111.415 1.415l-4 4a1 1 0 01-1.415 0l-4-4a1 1 0 010-1.415z"
              clip-rule="evenodd"
            />
          </svg>
      </button>
      <button
        class="border-2 border-[#b70569] hover:bg-[#b70569] hover:text-white text-[#b70569] font-bold py-2 px-6 rounded-lg"
      >
        Donate
      </button>
    </div>
  </div>

  <div>
    <home-carousel/>
  </div>
  </section>
  
</template>
<script>
import HomeCarousel from './Home/HomeCarousel.vue';
export default{
  components: {
    HomeCarousel
  }
}
</script>