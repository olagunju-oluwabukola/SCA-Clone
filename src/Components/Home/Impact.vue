<template>
    <section class="flex flex-col md:flex-row items-center justify-between bg-pink-700 py-12 px-4 md:px-16 text-white">
      <!-- Left Side: Content -->
      <div class="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col items-center md:items-start">
        <div class="mb-6">
          <div class="bg-pink-100 p-4 rounded-full mb-4">
            <svg class="w-8 h-8 text-pink-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 18.5c-4.687 0-8.5-3.813-8.5-8.5S5.313 1.5 10 1.5 18.5 5.313 18.5 10 14.687 18.5 10 18.5zm0-7.5c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z" />
            </svg>
          </div>
          <h2 class="text-3xl font-bold">Our Reach So Far</h2>
        </div>
        <p class="mb-6 text-center md:text-left">
          At She Code Africa, we’re aimed at bridging the gender gap in Tech.
        </p>
        <button class="bg-white text-pink-700 font-semibold py-2 px-4 rounded-lg hover:bg-pink-600 hover:text-white transition">
          Become a member
        </button>
      </div>
  
      <!-- Right Side: Image & Stats -->
      <div class="relative w-full md:w-1/2 flex justify-center md:justify-end">
        <img src="/img/unsplash-our-reach-1.7b4f1671964a3560f80f.png" alt="Community Image" class="rounded-lg w-full md:w-3/4 object-cover" />
  
        <!-- Stats overlay -->
        <div class="absolute bottom-0 right-0 bg-pink-100 text-pink-700 rounded-lg p-4 md:p-6 w-full md:w-3/4">
          <p class="font-semibold text-lg md:text-xl">40+ <span class="block text-sm md:text-base">Chapter Locations</span></p>
          <p class="font-semibold text-lg md:text-xl mt-2">40000+ <span class="block text-sm md:text-base">Community Members</span></p>
          <p class="font-semibold text-lg md:text-xl mt-2">50000+ <span class="block text-sm md:text-base">Program beneficiaries so far</span></p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'OurReachSection',
  };
  </script>
  

  