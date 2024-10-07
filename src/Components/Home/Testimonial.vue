<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="flex flex-col md:flex-row justify-between items-center p-5">
      <!-- Left Side: Testimonial Quote -->
      <div class="flex flex-col items-start">
        <div class="text-pink-400 text-9xl">
          &ldquo;
        </div>
        <div class="mt-4 text-3xl font-bold text-gray-900">Testimonials</div>
        <p class="text-gray-600 mt-2">Read from some of our beneficiaries.</p>
        <!-- Navigation Arrows -->
        <div class="flex space-x-2 mt-5">
          <button
            @click="prevTestimonial"
            class="bg-pink-400 text-white p-2 rounded-full"
          >
            &lt;
          </button>
          <button
            @click="nextTestimonial"
            class="bg-pink-400 text-white p-2 rounded-full"
          >
            &gt;
          </button>
        </div>
      </div>
  
      <!-- Right Side: Testimonial Card -->
      <div class="bg-pink-600 text-white rounded-lg shadow-lg p-8 mt-10 md:mt-0 md:ml-10 max-w-lg w-full">
        <div class="flex items-center">
          <img
            :src="currentTestimonial.image"
            alt="Avatar"
            class="w-16 h-16 rounded-full object-cover"
          />
          <div class="ml-4">
            <h3 class="text-lg font-bold">{{ currentTestimonial.name }}</h3>
          </div>
        </div>
        <p class="mt-4">
          {{ currentTestimonial.text }}
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0,
        testimonials: [
          {
            name: 'Ruth Ikegah',
            text: 'She Code Africa Mentor-ship Program was a huge part of my growth as a woman in tech. I am grateful to my mentor who stressed an understanding of the basics of programming, explaining the concepts in beginner-friendly terms.',
            image: 'https://via.placeholder.com/64',
          },
          {
            name: 'Jane Doe',
            text: 'The mentorship program opened doors for me. I gained a lot of skills in a short amount of time, thanks to the dedicated mentors and practical sessions.',
            image: 'https://via.placeholder.com/64',
          },
          {
            name: 'John Smith',
            text: 'The program was an eye-opener. I never thought I could learn so much about tech, but the She Code Africa program proved me wrong!',
            image: 'https://via.placeholder.com/64',
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
  

  