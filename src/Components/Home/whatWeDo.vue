<template>
    <div class="container mx-auto p-6 text-center">
      <div class="text-center max-w-2xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">What We Do</h1>
        <p class="mb-6">
          According to Data from Accenture, the ratio of women to men in tech roles has declined in the past 35 years.
          Out of 50% individuals in the industry, only 20% are women who are significantly represented, with only 14%
          in software engineering and 25% in computer science-related roles compared to their male counterparts.
        </p>
        <p class="font-bold mb-8">Here's how we're tackling that:</p>
      </div>
  
      <!-- Cards Section -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 place-items-center">
        <!-- Loop through the cards -->
        <div v-for="(card, index) in cards" :key="index" class="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs text-center">
          <img
            :src="card.image"
            :alt="card.title"
            class="w-full h-52 object-cover"
          />
          <div class="p-4 rounded-b-lg bg-white"> <!-- Added rounded-b-lg to give the text container a corner radius -->
            <h2 class="text-xl font-bold mb-2">{{ card.title }}</h2>
            <p class="text-gray-700 mb-2">{{ card.description }}</p>
            <a :href="card.link" class="text-indigo-500 font-bold">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WhatWeDo',
    data() {
      return {
        cards: [
          {
            image: 'https://via.placeholder.com/300x200',  // Replace with actual image URL
            title: 'Academy',
            description: 'Kick off or scale your Tech career through any of our academy programs, fully tailored to meet you at your learning journey with the help of experts.',
            link: '#',
          },
          {
            image: 'https://via.placeholder.com/300x200',  // Replace with actual image URL
            title: 'Our Communities and Chapters',
            description: 'Join our community platform and get to connect with 25,000+ African women in tech from around the continent just like you.',
            link: '#',
          },
          {
            image: 'https://via.placeholder.com/300x200',  // Replace with actual image URL
            title: 'Mentorship',
            description: 'Get personalized guidance and advice from experienced professionals to help you navigate your career.',
            link: '#',
          },
          {
            image: 'https://via.placeholder.com/300x200',  // Replace with actual image URL
            title: 'Events and Conferences',
            description: 'Participate in events and conferences to network, learn, and stay updated with the latest industry trends.',
            link: '#',
          },
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* Optional custom styles */
  </style>
  