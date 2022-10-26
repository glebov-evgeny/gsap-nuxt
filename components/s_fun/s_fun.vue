<template>
  <div class="section_f">
    <div class="section_z">...</div>
    <div class="section_f-sun" id="ball"></div>
  </div>
</template>

<script>
import './s_fun.scss';
import { gsap } from 'gsap';

export default {
  name: 's-fun',
  data() {
    return {};
  },
  // mounted() {
  //   this.updateElementScroll();
  // },

  beforeMount() {
    this.updateElementScroll();
  },
  methods: {
    updateElementScroll() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.section_f',
          start:
            'top -200vh' /* нужно точнее рассчитать высоту для старта анимации, исходя из предшестующих экранов с горизонтальным скроллом */,
          end: 'bottom',
          repeat: 0,
          ease: 'linear',
          duration: 2,
          markers: false,
          scrub: 1,
        },
      });
      tl.fromTo(
        '#ball',
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
