
<template>
  <section>
    <hero-comp />
    <logo-carousel />
    <mission/>
    <Impact/>
    <whatWeDo/>
    <Testimonial/>
    <Gallery/>
    <CTA/>
    <div v-if="isModalVisible" class="fixed inset-0 bg-black bg-opacity-50"></div>

   
    <div
      v-if="isModalVisible"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg shadow-lg w-full max-w-lg p-8 relative">
        
        <button
          class="absolute top-4 right-4 text-gray-500"
          @click="closeModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

      
        <h2 class="text-center text-xl font-bold text-pink-600 mb-4">
          Sponsor a Tech Lady
        </h2>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4575/4575974.png"
          alt="Donation Image"
          class="mx-auto w-24 h-24 mb-4"
        />
        <p class="text-center text-gray-700 mb-4">
          Did you know by donating as little as $5.3 (~8,532 NGN), you'd be helping us mentor and provide resources to 1 female in tech in 1 day?
        </p>
        <div class="flex justify-center">
          <button
            class="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700"
          >
            Make Donation
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HeroComp from '@/Components/HeroComp.vue';
import LogoCarousel from '@/Components/Home/LogoCarousel.vue';
import Mission from '@/Components/Home/Mission.vue';
import Impact from '@/Components/Home/Impact.vue';
import whatWeDo from '@/Components/Home/whatWeDo.vue';
import Testimonial from '@/Components/Home/Testimonial.vue';
import Gallery from '@/Components/Home/Gallery.vue';
import CTA from '@/Components/Home/CTA.vue';
const isModalVisible = ref(false);


onMounted(() => {
  isModalVisible.value = true;
});


const closeModal = () => {
  isModalVisible.value = false;
};
</script>

<style>

.fixed.inset-0 {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
