<template>
  <section>
    <hero-comp/>
    <home-carousel/>
    <logo-carousel/>
  </section>
</template>
  components: { HeroComp },

<script setup>
import HeroComp from '@/Components/HeroComp.vue';
import HomeCarousel from '@/Components/Home/HomeCarousel.vue';
import LogoCarousel from '@/Components/Home/LogoCarousel.vue';
</script>

<style>

</style>