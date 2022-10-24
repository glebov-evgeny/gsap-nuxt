<template>
  <section class="intro">
    <div class="container intro__container">
      <h1 class="intro__title">Lorem, <br /><span>ipsum</span> dolor.</h1>
      <p class="intro__description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus ullam vitae quos quibusdam impedit iste,
        officiis aut praesentium distinctio deserunt similique qui possimus tempore fugiat quas esse perferendis porro?
      </p>
      <div class="intro__sun"></div>
    </div>
    <div class="intro__decoration">
      <div class="intro__decoration-el-1"></div>
      <div class="intro__decoration-el-2"></div>
    </div>
  </section>
</template>

<script>
import './s_intro.scss';
import { gsap } from 'gsap';

export default {
  name: 's-intro',
  data() {
    return {};
  },
  mounted() {
    this.updateElement();
  },
  methods: {
    updateElement() {
      gsap.fromTo(
        '.intro__sun',
        {
          // Откуда
          opacity: 0,
          scale: 0.8,
          y: -75,
        },
        {
          // Куда
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 3,
          ease: 'elastic',
          repeat: 0, // по умолчанию 0, бесконечно -1
        },
      );
    },
  },
};
</script>
