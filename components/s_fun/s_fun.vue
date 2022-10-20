<template>
  <div class="section_f">
    <div class="section_z">...</div>
    <div class="section_f-sun"></div>
  </div>
</template>

<script>
import './s_fun.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
  name: 's-fun',
  data() {
    return {};
  },
  beforeMount() {
    gsap.registerPlugin(ScrollTrigger);
    this.updateElementScroll();
  },

  methods: {
    updateElementScroll() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.section_f',
          start: 'top 70%',
          end: 'top 40%',
          repeat: 0,
          ease: 'linear',
          duration: 2,
          markers: false /* Отображает маркеры анимации */,
          scrub: 1,
        },
      });
      tl.fromTo(
        '.section_f-sun',
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          xPercent: -400,
          y: -50,
        },
      );
    },
  },
};
</script>
