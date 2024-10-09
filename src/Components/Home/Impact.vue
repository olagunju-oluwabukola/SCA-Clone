<template>
  <section class="flex flex-col md:flex-row md:justify-between justify-center bg-[#b70569] py-12 px-4 md:px-16 text-white">
 
    <div class="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col items-center md:items-start">
      <div class="mb-6">
        <img class="w-20 md:w-50 mx-auto md:mx-0" src="/img/Icon-our-reach.8601d1d3f809d304faa5fede12d21510.svg" alt="Icon Our Reach" />
        <h2 class="text-3xl font-bold mt-3 md:mt-5">Our Reach So Far</h2>
      </div>
      <p class="mb-6 text-center md:text-left md:text-2xl">
        At She Code Africa, we’re aimed at bridging the gender gap in Tech.
      </p>
      <button class="bg-white text-pink-700 font-semibold py-2 px-4 rounded-lg hover:bg-pink-600 hover:text-white transition">
        Become a member
      </button>
    </div>

    <div class="relative w-full md:w-1/2 flex justify-center">
      <img src="/img/unsplash-our-reach-1.7b4f1671964a3560f80f.png" alt="Community Image" class="rounded-lg w-full md:w-3/4 object-cover" />

      
      <div class="absolute bottom-0 text-[#b70569] right-5 bg-[#EB94CF] rounded-lg p-4 md:p-6 w-full md:w-3/4">
        <p class="font-bold text-lg md:text-xl">{{ chapterCount }}+ <span class="block text-sm md:text-base">Chapter Locations</span></p>
        <p class="font-bold text-lg md:text-xl mt-2">{{ memberCount }}+ <span class="block text-sm md:text-base">Community Members</span></p>
        <p class="font-bold text-lg md:text-xl mt-2">{{ beneficiariesCount }}+ <span class="block text-sm md:text-base">Program beneficiaries so far</span></p>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'OurReachSection',
  setup() {
    const chapterCount = ref(0);
    const memberCount = ref(0);
    const beneficiariesCount = ref(0);
    
    const targetChapterCount = 40;
    const targetMemberCount = 40000;
    const targetBeneficiariesCount = 50000;

    const startCountdown = (target, refValue) => {
      const incrementTime = 50; 
      const step = Math.ceil(target / 100); 
      const interval = setInterval(() => {
        if (refValue.value < target) {
          refValue.value += step;
          if (refValue.value > target) {
            refValue.value = target; 
          }
        } else {
          clearInterval(interval);
        }
      }, incrementTime);
    };

    onMounted(() => {
      startCountdown(targetChapterCount, chapterCount);
      startCountdown(targetMemberCount, memberCount);
      startCountdown(targetBeneficiariesCount, beneficiariesCount);
    });

    return {
      chapterCount,
      memberCount,
      beneficiariesCount,
    };
  },
};
</script>

