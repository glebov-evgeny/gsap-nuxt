<template>
  <div class="wrapper">
    <s-header />
    <Nuxt />
    <!-- <s-footer /> -->
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
  beforeMount() {
    gsap.registerPlugin(ScrollTrigger);
  },
};
</script>
