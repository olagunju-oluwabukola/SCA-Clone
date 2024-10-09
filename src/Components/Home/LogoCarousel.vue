<template>
  <div>
    <div class="text-xl md:text-5xl text-center py-10 px-5 md:px-0 md:py-14 font-semibold ">
      <p>Brands that believe in our vision and goal</p>
    </div>
    <div class="logo-container overflow-hidden">
      <div class="logos flex items-center animate-slide">
        <div v-for="(logo, index) in [...logos, ...logos]" :key="index" class="logo-item">
          <div class=" h-16 w-32 mx-2 flex items-center justify-center">
            <img :src="logo.src" :alt="logo.alt" class="h-full w-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo1 from "/img/deimos_logo.png"
import logo2 from "/img/Bolt_logo.png"
import logo3 from "/img/Buckhill_logo.png"
import logo4 from "/img/Cd_foundation.png"
import logo5 from "/img/chimoney__1_.png"
import logo6 from "/img/cloudbees.png"
import logo7 from "/img/deimos_logo.png"
import logo8 from "/img/DeployHub.png"
import logo9 from "/img/gwg.png"
// import logo10 from "/img/GiveInternet_logo.png"
import logo11 from "/img/jenkins__1_.png"
import logo12 from "/img/Lagos_State_govt.jpeg"
import logo13 from "/img/Layer-5.png"
import logo14 from "/img/microsoft_logo.png"
import logo15 from "/img/nguvu_health.png"
import logo16 from "/img/propel__1_.png"
import logo17 from "/img/Treford_Beta_Logo-02.png"
import logo18 from "/img/Tunga_logo.png"
import logo19 from "/img/ZOHO_logo_2023.svg.png"

export default {
  data() {
    return {
      logos: [
        { src: logo1, alt: 'Deimos Logo' },
        { src: logo2, alt: 'Bolt Logo' },
        { src: logo3, alt: 'Buckhill Logo' },
        { src: logo4, alt: 'Cd Foundation Logo' },
        { src: logo5, alt: 'Chimoney Logo' },
        { src: logo6, alt: 'CloudBees Logo' },
        { src: logo7, alt: 'Deimos Logo (duplicate)' }, // Consider removing this if it's not needed
        { src: logo8, alt: 'DeployHub Logo' },
        { src: logo9, alt: 'GWG Logo' },
        // { src: logo10, alt: 'Give Internet Logo' },
        { src: logo11, alt: 'Jenkins Logo' },
        { src: logo12, alt: 'Lagos State Government Logo' },
        { src: logo13, alt: 'Layer-5 Logo' },
        { src: logo14, alt: 'Microsoft Logo' },
        { src: logo15, alt: 'Nguvu Health Logo' },
        { src: logo16, alt: 'Propel Logo' },
        { src: logo17, alt: 'Treford Beta Logo' },
        { src: logo18, alt: 'Tunga Logo' },
        { src: logo19, alt: 'Zoho Logo' },
      ],
    };
  },
};
</script>

<style scoped>
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.logo-container {
  width: 100%;
}

.logos {
  display: flex;
  width: max-content;
  animation: slide 20s linear infinite;
}

.logo-item img {
  max-height: 100%; 
  max-width: 100%; 
}
</style>
