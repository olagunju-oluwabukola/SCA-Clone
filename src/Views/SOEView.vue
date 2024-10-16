<template>
  <section class="pt-20  bg-gradient-to-r from-white to-[#f0cde1] md:mt-14 p-5  md:p-20">
    <p class="text-2xl md:text-4xl mb-6 font-bold">School of Engineering</p>
    <p class="text-xl md:w-1/2">
      Our 2-3 month Engineering program includes a range of essential tech courses, from Software Engineering (Web and Mobile), to Cloud Engineering, Data Science and Data Analytics and Hardware Engineering such as Robotics.
      </p>
  </section>

  <section class=" md:p-20 p-10 text-center">
    <h1 class="text-2xl md:text-3xl font-bold mb-4">Current Programs</h1>
    <p>No ongoing Programs</p>
  </section>

  <section class="bg-gray-200 md:p-20 text-center p-10">
    <h1 class="text-2xl md:text-3xl font-bold mb-4">Online Course</h1>
    <p>No courses available</p>
  </section>

  <section>
    <div class="container mx-auto px-4">
   
    <section class="mt-10">
      <h2 class="text-3xl font-bold text-center mb-8">Success Stories</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div class="flex flex-col items-center">
          <iframe class="w-full h-60" src="https://youtu.be/wBVYJWAH2B0" frameborder="0" allowfullscreen></iframe>
          <p class="mt-2 text-center">Nicole's Story - Chasing your dreams in Tech</p>
        </div>
       
        <div class="flex flex-col items-center">
          <iframe class="w-full h-60" src="https://youtu.be/uwpBqSkJTPg" frameborder="0" allowfullscreen></iframe>
          <p class="mt-2 text-center">Ayodele's Story</p>
        </div>
      
        <div class="flex flex-col items-center">
          <iframe class="w-full h-60" src="https://youtu.be/USWzE09j0M8" frameborder="0" allowfullscreen></iframe>
          <p class="mt-2 text-center">Bami's Story</p>
        </div>
      </div>
    </section>

    
    <section class="md:mt-20 mt-16 bg-gray-100 p-4  md:p-10 text-center rounded-lg">
      <div class="bg-white p-4 md:p-10">
        <h3 class="text-2xl md:text-4xl font-semibold mb-4">Hire Our Graduates</h3>
      <p class="text-lg mb-6 md:px-20">
        Access a pool of talented engineers from our renowned engineering school and take your business to the next level by building a skilled and diverse team.
      </p>
      <router-link to="/hire">
        <button class="bg-primary text-white py-2 px-6 rounded-full transition">
        Hire Our Talent
      </button>
      </router-link>
     
      </div>
     
    </section>
  </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>