<template>
  <div class="container mx-auto px-5 py-14 md:py-20">
    <div class="text-center max-w-2xl mx-auto">
      <h1 class="text-4xl font-bold mb-4">What We Do</h1>
      <p class=" leading-relaxed md:leading-loose">
        According to Data from Accenture, the ratio of women to men in tech roles has declined in the past 35 years.
        Out of 50% individuals in the industry, only 20% are women who are significantly represented, with only 14%
        in software engineering and 25% in computer science-related roles compared to their male counterparts.
      </p>
      <p>Here's how we're tackling that:</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:px-28 mt-6 md:mt-14">
      <div v-for="(card, index) in cards" :key="index" class="shadow-lg rounded-lg overflow-hidden">
        <img
          :src="card.image"
          :alt="card.title"
          class="w-full h-52 object-cover"
        />
        <div class="p-4 rounded-b-lg bg-white border border-[#b70569] "> 
          <h2 class="text-xl font-bold mb-2 text-center md:text-left">{{ card.title }}</h2>
          <p class="text-gray-700 mb-2 text-center md:text-left">{{ card.description }}</p>
          <RouterLink :to="card.link" class="text-[#b70569] font-bold">Learn More</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import img1 from '/img/carouselimg2.png';
import img2 from '/img/unsplash-our-reach-1.7b4f1671964a3560f80f.png';
import img3 from '/img/benefit2.jpg';
import img4 from '/img/gallery-two.ca94655463cd02e05844.png';

export default {
  name: 'WhatWeDo',
  components: {
    RouterLink
  },
  setup() {
    
    const cards = ref([
      {
        image: img1,  
        title: 'Academy',
        description: 'Kick off or scale your Tech career through any of our academy programs, fully tailored to meet you at your learning journey with the help of experts.',
        link: '/Academy',  
      },
      {
        image: img2,  
        title: 'Our Communities and Chapters',
        description: 'Join our community platform and get to connect with 25,000+ African women in tech from around the continent just like you.',
        link: '/community',  
      },
      {
        image: img3,  
        title: 'Mentorship',
        description: 'Get personalized guidance and advice from experienced professionals to help you navigate your career.',
        link: '/Mentorship',  
      },
      {
        image: img4,  
        title: 'Events and Conferences',
        description: 'Participate in events and conferences to network, learn, and stay updated with the latest industry trends.',
        link: '/Events',  
      },
    ]);

    return {
      cards
    };
  }
}
</script>
