<template>
  <main class="main">
    <s-intro />
    <s-info />
    <s-line />
    <s-slider />
    <div class="w-full h-screen overflow-hidden" id="horizontalContainer">
      <div class="main__horizontal" id="horizontal">
        <section class="main__section _01">...</section>
        <section class="main__section _02">...</section>
      </div>
    </div>
    <!-- <a-loader/> -->
    <s-test />
    <s-fun />
    <s-test />
  </main>
</template>

<script>
// import ALoader from "@/components/_ui/a_loader/a_loader.vue"
import { gsap } from 'gsap';

export default {
  components: {
    // ALoader
  },
  data() {
    return {};
  },
  mounted() {
    this.horizontalElement();
  },
  methods: {
    horizontalElement() {
      const horizontal = document.getElementById('horizontal');
      const horizontalContainer = document.getElementById('horizontalContainer');

      gsap.to('#horizontal', {
        x: () => horizontalContainer.clientWidth - horizontal.clientWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: horizontalContainer,
          pin: true,
          start: 'top top',
          end: 'bottom',
          markers: false,
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });
    },
  },
};
</script>
