
<template>

<div>
  <navbar/>
</div>
<router-view/>
<footer>
  <footer-comp/>
</footer>
</template>


<script setup>
import Navbar from './Components/Navbar.vue';
import FooterComp from './Components/FooterComp.vue';
</script>