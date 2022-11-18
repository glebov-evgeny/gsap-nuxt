<template>
  <div class="slider">
    <div class="slider__container">
      <swiper class="slider__block" :options="swiperOptionSliders">
        <swiper-slide class="slider__item" v-for="item in items" :key="item.id">
          <p class="slider__item-text">{{ item.id }}</p>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import './s_slider.scss';

export default {
  name: 's-slider',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptionSliders: {
        slidesPerView: 1.5,
        spaceBetween: 20,
        resistance: true,
        resistanceRatio: 0.85,
        allowTouchMove: true,
        centeredSlides: true,
        loop: true,
      },
      items: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
      ],
    };
  },
};
</script>
