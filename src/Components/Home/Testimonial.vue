<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="flex flex-col md:flex-row justify-between gap-16 items-center  md:px-36">
      <div class="flex flex-col items-start">
        <img class="hidden md:block mb-6" src="/img/left-quote.5617252a3e679bd73162f214265a3a08.svg" alt="">
        <div class="mt-4 text-3xl  md:text-5xl font-bold text-gray-900 mx-auto md:mx-0">Testimonials</div>
        <p class="text-gray-600 mt-2">Read from some of our beneficiaries.</p>
        
        <div class="flex space-x-2 mt-5 mx-auto md:mx-0">
          <button
            @click="prevTestimonial"
            class=" font-bold text-[#b70569] p-2 text-2xl rounded-full hover:text-gray-600"
          >
            &lt;
          </button>
          <button
            @click="nextTestimonial"
            class=" text-[#b70569] font-bold text-2xl p-2 rounded-full hover:text-gray-600"
          >
            &gt;
          </button>
        </div>
      </div>

      <div class="bg-[#b70569] w-full h-full p-10 md:p-20">
        <div class="bg-white text- rounded-lg shadow-lg p-8 mt-10 md:mt-0 md:ml-10 max-w-lg w-full">
        <div class="flex items-center">
          <img
            :src="currentTestimonial.image"
            alt="Avatar"
            class="w-16 h-16 rounded-full object-cover"
          />
          <div class="ml-4">
            <h3 class="text-lg font-bold text-[#b70569]">{{ currentTestimonial.name }}</h3>
          </div>
        </div>
        <p class="mt-4">
          {{ currentTestimonial.text }}
        </p>
      </div>
      </div>
    </div>
    
  </template>
  
  <script>
  import img from '/public/img/avatar.webp'
  export default {
    data() {
      return {
        currentIndex: 0,
        testimonials: [
          {
            name: 'Ruth Ikegah',
            text: 'She Code Africa Mentor-ship Program was a huge part of my growth as a woman in tech. I am grateful to my mentor who stressed an understanding of the basics of programming, explaining the concepts in beginner-friendly terms.',
            image: img,
          },
          {
            name: 'Jane Doe',
            text: 'The mentorship program opened doors for me. I gained a lot of skills in a short amount of time, thanks to the dedicated mentors and practical sessions.',
            image: img,
          },
          {
            name: 'John Smith',
            text: 'The program was an eye-opener. I never thought I could learn so much about tech, but the She Code Africa program proved me wrong!',
            image: img,
          },
        ],
      };
    },
    computed: {
      currentTestimonial() {
        return this.testimonials[this.currentIndex];
      },
    },
    methods: {
      nextTestimonial() {
        this.currentIndex =
          (this.currentIndex + 1) % this.testimonials.length;
      },
      prevTestimonial() {
        this.currentIndex =
          (this.currentIndex - 1 + this.testimonials.length) %
          this.testimonials.length;
      },
    },
  };
  </script>
  

  