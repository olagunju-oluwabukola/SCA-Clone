
<template>

<div>
  <navbar/>
</div>
<div class="">
  <router-view/>
</div>

<footer>
  <footer-comp/>
</footer>
</template>


<script setup>
import Navbar from './Components/Navbar.vue';
import FooterComp from './Components/FooterComp.vue';
</script>