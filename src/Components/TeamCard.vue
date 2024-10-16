<template>
  <div class="md:p-20 p-5">
    <h1 class="text-3xl font-bold mb-4 text-center">Our Amazing Team</h1>
    <p class="text-center mb-4">Empowering and celebrating women in technology across Africa.</p>

    <div class="md:flex justify-between py-4 md:py-10">
      <div class=" grid md:flex justify-center gap-8 mb-6">
        <button 
          class="bg-gray-200 hover hover:bg-black text-black hover:text-white px-4 py-2 rounded-full" 
          :class="{'bg-black': activeFilter === 'All'}"
          @click="filterTeam('All')">All</button>
        <button 
          class="bg-gray-200 text-black px-4 py-2 rounded-full hover hover:bg-black hover:text-white" 
          :class="{'bg-dark': activeFilter === 'Full Time Employees'}"
          @click="filterTeam('Full Time Employees')">Full Time Employees</button>
        <button 
          class="bg-gray-200 text-black px-4 py-2 rounded-full hover hover:bg-black hover:text-white" 
          :class="{'bg-black': activeFilter === 'Support Team'}"
          @click="filterTeam('Support Team')">Support Team</button>
        <button 
          class="bg-gray-200 text-black px-4 py-2 rounded-full hover hover:bg-black hover:text-white" 
          :class="{'bg-black': activeFilter === 'Advisors'}"
          @click="filterTeam('Advisors')">Advisors</button>
      </div>
      <div class="flex justify-center mb-8">
        <input
          type="text"
          class="border border-3 text-center hover hover:border-primary text-sm rounded-full px-4 py-2 md:w-full"
          v-model="searchQuery"
          placeholder="Search..."
        />
      </div>
    </div>

    <div v-if="filteredTeam.length === 0" class="text-center text-gray-500">
      No results found for "{{ searchQuery }}"
    </div>

    <div v-if="filteredTeam.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
      <div 
        v-for="member in filteredTeam" 
        :key="member.name" 
        class="bg-white   rounded-lg shadow-lg border border-primary cursor-pointer hover:shadow-xl transition"
        @click="showDetails(member)">
        <img :src="member.image" alt="" class="w-full mb-4">
        <div class="md:p-8 p-4">
          <h2 class="text-lg font-bold">{{ member.name }}</h2>
        <p class="text-sm">{{ member.role }}</p>
        </div>
      </div>
    </div>

    <div v-if="selectedMember" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div class="bg-white rounded-lg p-8 max-w-lg w-full relative">
        <button @click="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          &times;
        </button>
        <img :src="selectedMember.image" alt="" class="w-32 h-32 rounded-full mx-auto mb-4">
        <h2 class="text-xl font-bold text-center mb-2">{{ selectedMember.name }}</h2>
        <p class="text-center text-sm text-gray-600 mb-4">{{ selectedMember.role }}</p>
        <p class="text-gray-700">{{ selectedMember.details }}</p>
      </div>
    </div>
  </div>

  <section class="">
        <div class="border-8 border-primary bg-[#fff7fc] text-center md:p-20 p-4 mx-5 md:mx-28">
            <p class="text-2xl mb-3 font-semibold">Become a member</p>
            <p class="">
            Be a part of a community that celebrates diversity and empowers women to thrive in tech. 
            Connect with like-minded individuals, gain access to resources and events, and help shape 
            the future of the industry.</p>
            <button class="bg-primary font-bold text-white px-6 py-3 rounded-xl mt-6 ">Join Us</button>
        </div>
    </section>
</template>

<script>
import { ref, computed } from 'vue';
import img from '/img/ada.jpg'
export default {
  setup() {
    const activeFilter = ref('All');
    const searchQuery = ref('');
    const selectedMember = ref(null);

    const teamMembers = ref([
      { 
        name: 'Ada Nduka Oyom', 
        role: 'Founder & Executive Director', 
        image: img, 
        category: 'Full Time Employees', 
        details: 'Ada Nduka Oyom is the founder and executive director of She Code Africa...'
      },
      { 
        name: 'Sayomi Solu', 
        role: 'Programs Manager', 
        image: img, 
        category: 'Full Time Employees', 
        details: 'Sayomi Solu is the programs manager at She Code Africa...'
      },
      { 
        name: 'Temilola Kutelu', 
        role: 'Engineering Lead', 
        image: img, 
        category: 'Support Team', 
        details: 'Temilola Kutelu is the engineering lead at She Code Africa...'
      },
    ]);

    const filteredTeam = computed(() => {
      return teamMembers.value.filter(member => {
        const matchesCategory = activeFilter.value === 'All' || member.category === activeFilter.value;
        const matchesSearch = member.name.toLowerCase().includes(searchQuery.value.toLowerCase());
        return matchesCategory && matchesSearch;
      });
    });

    const filterTeam = (category) => {
      activeFilter.value = category;
    };

    const showDetails = (member) => {
      selectedMember.value = member;
    };

    const closeModal = () => {
      selectedMember.value = null;
    };

    return {
      activeFilter,
      searchQuery,
      filteredTeam,
      selectedMember,
      filterTeam,
      showDetails,
      closeModal
    };
  }
};
</script>
