<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="px-5 md:px-20 py-10 space-y-16">
     
      <section>
        <h2 class="text-center text-3xl font-bold text-gray-800 mb-6">Gallery</h2>
        <p class="text-center text-gray-600 mb-10">Images of some of our events.</p>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img
            v-for="(image, index) in galleryImages"
            :key="index"
            :src="image.src"
            alt="Gallery Image"
            class="rounded-lg w-full h-64 object-cover"
          />
        </div>
  
        <!-- View More Button -->
        <div class="text-right mt-4">
          <a href="#" class="text-pink-600 font-medium">View More Photos &rarr;</a>
        </div>
      </section>
  
      <!-- Vacancy Section -->
      <section class="bg-pink-100 p-10 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center">
        <!-- Text Content -->
        <div class="flex-1 mb-6 md:mb-0 md:pr-10">
          <h2 class="text-2xl font-bold text-gray-900 mb-3">Ready to fill your vacant position?</h2>
          <p class="text-gray-700 mb-5">
            Recruit top talents from our pool of mentees with genuine passion and proven skills in tech.
          </p>
          <button class="bg-pink-600 text-white py-2 px-6 rounded-md font-medium">Hire Talents</button>
        </div>
  
        <!-- Image Content -->
        <div class="w-full md:w-1/3">
          <img
            src="https://via.placeholder.com/300"
            alt="Vacancy"
            class="rounded-lg object-cover w-full"
          />
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        galleryImages: [
          { src: 'https://via.placeholder.com/300x300?text=Event+1' },
          { src: 'https://via.placeholder.com/300x300?text=Event+2' },
          { src: 'https://via.placeholder.com/300x300?text=Event+3' },
          { src: 'https://via.placeholder.com/300x300?text=Event+4' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Additional styling if needed */
  </style>
  