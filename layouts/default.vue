<template>
  <Nuxt />
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
