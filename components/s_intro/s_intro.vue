<template>
  <section class="intro">
    <div class="container intro__container">
      <h1 class="intro__title" v-html="$t('title')"></h1>
      <p class="intro__description">
        {{ $t('text') }}
      </p>
      <p>{{ this.$store.state.token }}</p>
      <div class="select__lang">
        <nuxt-link :to="switchLocalePath('ru')" class="select__lang-link">
          <div class="s-footer__lang-logo">ru</div>
        </nuxt-link>
        <nuxt-link :to="switchLocalePath('en')" class="select__lang-link">
          <div class="s-footer__lang-logo">en</div>
        </nuxt-link>
      </div>
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

<i18n lang="json" src="./s_intro.json" />
