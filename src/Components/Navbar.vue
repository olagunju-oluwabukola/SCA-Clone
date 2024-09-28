<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <nav class="fixed top-0 left-0 w-full z-50 bg-white px-4 py-2 flex items-center justify-between shadow-md">
      <div class="flex items-center">
        <router-link to="/">
            <img src="/img/logo-inverted.7195198d179e88355dc87e39dc585a96.svg" 
            alt="Logo" 
            class="h-10" />
        </router-link>
        
      </div>
      <ul class="hidden md:flex space-x-6 text-gray-700 items-center">
        
        <router-link class="ont-bold text-pink-600" to="/">Home</router-link>

        <li class="relative" @mouseleave="closeDropdown('about')">
          <button
            class="flex items-center space-x-1 hover:text-pink-600 focus:outline-none"
            @click="toggleDropdown('about')"
          >
            <span>About</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              :class="dropdowns.about ? 'rotate-180' : ''"
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
          <ul
            v-show="dropdowns.about"
            class="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg py-2 space-y-2"
          >
          <router-link class="block px-4 py-2 hover:bg-gray-100" to="/about">About SCA</router-link>
            <router-link to="/Team" class="block px-4 py-2 hover:bg-gray-100">Our Team</router-link>
            
          </ul>
        </li>

        <li class="relative" @mouseleave="closeDropdown('academy')">
          <button
            class="flex items-center space-x-1 hover:text-pink-600 focus:outline-none"
            @click="toggleDropdown('academy')"
          >
            <span>Academy</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              :class="dropdowns.academy ? 'rotate-180' : ''"
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
          <ul
            v-show="dropdowns.academy"
            class="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg py-2 space-y-2"
          >
            <router-link class="block px-4 py-2 hover:bg-gray-100" to="/School of Applied Skills"> School of Applied Skills</router-link>
            <router-link to="/School of Product" class="block px-4 py-2 hover:bg-gray-100">School of Product</router-link>
            <router-link class="block px-4 py-2 hover:bg-gray-100" to="/School of Engineering">School of Engineering</router-link>
            
            
          </ul>
        </li>
  
       
  
        <li class="relative" @mouseleave="closeDropdown('getInvolved')">
          <button
            class="flex items-center space-x-1 hover:text-pink-600 focus:outline-none"
            @click="toggleDropdown('getInvolved')"
          >
            <span>Get Involved</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              :class="dropdowns.getInvolved ? 'rotate-180' : ''"
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
          <ul
            v-show="dropdowns.getInvolved"
            class="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg py-2 space-y-2"
          >
            <router-link class="block px-4 py-2 hover:bg-gray-100" to="/Volounteer">Volunteer With Us</router-link>
            <a href="http://" target="_blank" rel="noopener noreferrer" class="block px-4 py-2 hover:bg-gray-100" >Become a Member</a>
            <a href="http://" target="_blank" rel="noopener noreferrer" class="block px-4 py-2 hover:bg-gray-100">Partner With Us</a>
            <router-link class="block px-4 py-2 hover:bg-gray-100" to="/Events">Events</router-link>
            <router-link class="block px-4 py-2 hover:bg-gray-100" to="/initiatives">Initiatives</router-link>
          </ul>
        </li>
  
       
        
        <li class="relative" @mouseleave="closeDropdown('community')">
          <button
            class="flex items-center space-x-1 hover:text-pink-600 focus:outline-none"
            @click="toggleDropdown('community')"
          >
            <span>Community</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              :class="dropdowns.community ? 'rotate-180' : ''"
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
          <ul
            v-show="dropdowns.community"
            class="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg py-2 space-y-2"
          >
            <router-link class="block px-4 py-2 hover:bg-gray-100" to="community/">SCA Community</router-link>
            <router-link class="block px-4 py-2 hover:bg-gray-100" to="/chapters">SCA Chapters</router-link>
          </ul>
        </li>
        <router-link to="/jobs" class="hover:text-pink-600">Jobs</router-link>
      </ul>
  
     
      <RouterLink to="/donate" class="hidden md:inline-block bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700">
        Donate
      </RouterLink>



       <!-- Mobile Menu -->
      <div class="md:hidden">
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-700 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  
   
    <ul v-if="mobileMenuOpen" class="md:hidden bg-white space-y-4 py-2 px-4">
            <router-link class="ont-bold text-pink-600" to="/">Home</router-link>
        <h2 class="text-bold">About</h2>
            <router-link class="block px-4 py-2 hover:bg-gray-100" to="/about">About SCA</router-link>
            <router-link to="/Team" class="block px-4 py-2 hover:bg-gray-100">Our Team</router-link>

        <h2 class="text-bold">Academy</h2>

            <router-link class="block px-4 py-2 hover:bg-gray-100" to="/School of Applied Skills"> School of Applied Skills</router-link>
            <router-link to="/School of Product" class="block px-4 py-2 hover:bg-gray-100">School of Product</router-link>
            <router-link class="block px-4 py-2 hover:bg-gray-100" to="/School of Engineering">School of Engineering</router-link>

        <h2 class="text-bold">Get Involved</h2>

            <router-link class="block px-4 py-2 hover:bg-gray-100" to="/Volounteer">Volunteer With Us</router-link>
            <a href="http://" target="_blank" rel="noopener noreferrer" class="block px-4 py-2 hover:bg-gray-100" >Become a Member</a>
            <a href="http://" target="_blank" rel="noopener noreferrer" class="block px-4 py-2 hover:bg-gray-100">Partner With Us</a>
            <router-link class="block px-4 py-2 hover:bg-gray-100" to="/Events">Events</router-link>
            <router-link class="block px-4 py-2 hover:bg-gray-100" to="/initiatives">Initiatives</router-link>

        <h2 class="text-bold">Community</h2>

            <router-link class="block px-4 py-2 hover:bg-gray-100" to="community/">SCA Community</router-link>
            <router-link class="block px-4 py-2 hover:bg-gray-100" to="/chapters">SCA Chapters</router-link>

            <router-link to="/jobs" class="hover:text-pink-600">Jobs</router-link>
    </ul>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const mobileMenuOpen = ref(false);
  const dropdowns = ref({
    about: false,
    getInvolved: false,
  });
  
  
  function handleClickOutside(event) {
    const clickedOutside = !event.target.closest('.relative');
    if (clickedOutside) {
      closeAllDropdowns();
    }
  }
  
  function toggleDropdown(name) {
    dropdowns.value[name] = !dropdowns.value[name];
  }
  
  function closeDropdown(name) {
    dropdowns.value[name] = false;
  }
  
  function closeAllDropdowns() {
    dropdowns.value.about = false;
    dropdowns.value.getInvolved = false;
  }
  
  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });
  
  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
  });
  </script>
  
  <style scoped>
  .rotate-180 {
    transform: rotate(180deg);
  }
  </style>
  