<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="px-5 md:px-20 py-10 space-y-16">
   
    <section>
      <h2 class="text-center text-3xl font-bold text-gray-800 mb-6">Gallery</h2>
      <p class="text-center text-gray-600 mb-10">Images of some of our events.</p>

      <div class="grid md:flex gap-10 md:gap-20 h-full">
      
        <div class="md:w-1/2">
          <img class="w-full" src="/public/img/gallery-sca.ba97becb9dbc35100856.png" alt="">
        </div>

        <div class="md:w-1/2">
          <img class="h-[420px] w-full mb-8" src="/img/gallery-two.ca94655463cd02e05844.png" alt="">
          <img src="/img/gallery-3.9f134d84b0325ef822ce.png" alt="">
        </div>
      </div>

      <div class="text-right mt-4">
        <a
          href="https://drive.google.com/drive/folders/1VsF4fQvNLXXuwWnLi2ThjD6oZxJYdFkp"
          target="_blank"
          class="text-[#b70569] font-medium"
          >View More Photos &rarr;</a
        >
      </div>
      
    </section>

   
    <section class="bg-pink-100 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center">
      <div class="flex justify-center items-center min-h-screen bg-pink-50">
    <div class="relative bg-white p-8 md:p-16 rounded-md shadow-lg">
      
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full border-8 border-[#b70569]"></div>

     
      <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
       
        <div class="flex flex-col justify-center">
          <h2 class="text-2xl md:text-4xl font-semibold mb-4 text-gray-900">
            Ready to fill your vacant position?
          </h2>
          <p class="text-gray-600 mb-6">
            Explore diverse tech talents of your choice with genuine skill sets and good workplace ethics.
          </p>

          <router-link to="/hire">

            <button
            class="bg-[#b70569] text-white px-6 py-3 rounded-xl font-medium shadow-lg transition hover:bg-transparent hover:text-[#b70569] hover:border hover:border-[#b70569]"
          >
            Hire Our Talent
          </button>

          </router-link>
        
        </div>

        <div class="relative">
          <div class="">
            <img
              src="/public/img/hire-talent.c2cb950c788ad98aea51.png"
              alt="Talented individuals"
              class="w-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
    </section>
  </div>
</template>




