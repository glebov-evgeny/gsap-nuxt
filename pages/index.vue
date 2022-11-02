<template>
  <div class="wrapper">
    <s-header @popupIsOpen="popupIsOpen" />
    <main class="main">
      <s-intro />
      <s-info />
      <s-line />
      <s-slider />
      <div class="w-full h-screen overflow-hidden" id="horizontalContainer">
        <div class="main__horizontal" id="horizontal">
          <section class="main__section _01">...</section>
          <section class="main__section _02">...</section>
          <section class="main__section _03">...</section>
        </div>
      </div>
      <s-test />
      <s-fun />
      <s-test />
      <s-popup :show="popuIsShow" @popupIsClosed="popupIsClosed">
        <m-form className="_compact" />
      </s-popup>
    </main>
  </div>
</template>

<script>
import MForm from '@/components/_ui/m_form/m_form';
import { gsap } from 'gsap';

export default {
  components: {
    MForm,
  },
  data() {
    return {
      popuIsShow: false,
    };
  },
  mounted() {
    this.horizontalElement();
  },
  methods: {
    horizontalElement() {
      const horizontal = document.getElementById('horizontal');
      const horizontalContainer = document.getElementById('horizontalContainer');
      // console.log(horizontalContainer.clientWidth, horizontal.clientWidth)
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
    popupIsOpen() {
      this.popuIsShow = true;
    },
    popupIsClosed() {
      this.popuIsShow = false;
    },
  },
};
</script>
