<template>
  <div class="info">
    <div class="container info__container">
      <h2 class="title info__title">Lorem, ipsum dolor.</h2>
      <p class="description info__description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod magni illum possimus esse consectetur!
        Perspiciatis?
      </p>
      <div class="info__block">
        <m-form />
        <div class="info__box">
          <div class="info__item _01">1</div>
          <div class="info__item _02">2</div>
          <div class="info__item _03">3</div>
          <div class="info__item _04">4</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './s_info.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MForm from '@/components/_ui/m_form/m_form';

export default {
  name: 's-info',
  components: {
    MForm,
  },
  data() {
    return {};
  },
  beforeMount() {
    gsap.registerPlugin(ScrollTrigger);
    this.updateElement();
  },
  methods: {
    updateElement() {
      const items = gsap.utils.toArray('.info__item');
      items.forEach((item) => {
        gsap.fromTo(
          item,
          {
            y: 75,
            x: 15,
            opacity: 0,
          },
          {
            y: 0,
            x: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: item,
              scrub: true,
              start: 'top 90%',
              end: 'top 65%',
              markers: false,
            },
          },
        );
      });
    },
  },
};
</script>
