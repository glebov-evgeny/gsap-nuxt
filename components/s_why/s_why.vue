<template>
  <section class="s-why">
    <h2 class="s-why__title s-title">Почему это важно</h2>
    <swiper class="s-why__box" :options="swiperOption">
      <swiper-slide class="s-why__item" v-for="item in items" :key="item.id">
        <div class="s-why__item-content">
          <div class="s-why__item-img">
            <!-- <img class="s-why__item-img-border" src="~/assets/images/why-icon.png" alt="border" /> -->
          </div>
          <p class="s-why__item-title">{{ item.title }}</p>
          <p class="s-why__item-text">{{ item.text }}</p>
          <p class="s-why__item-description">{{ item.description }}</p>
        </div>
        <div class="s-why__item-decoration" :class="`s-why__item-decoration-${item.id}`"></div>
      </swiper-slide>
    </swiper>
    <div class="s-why__test">
      <div class="s-why__k">...</div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import './s_why.scss';

export default {
  name: 's-why',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1.2,
        spaceBetween: 20,
        resistance: true,
        resistanceRatio: 0,
        allowTouchMove: true,
        breakpoints: {
          576: {
            slidesPerView: 1.6,
          },
          767: {
            slidesPerView: 2.6,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
            allowTouchMove: false,
          },
        },
      },
      items: [
        {
          id: 1,
          // eslint-disable-next-line max-len
          title: 'Более 70% школьников в России не понимают, какую профессию хотели бы получить в будущем*',
          text: 'Не умеют объективно оценивать себя, недостаточно знают о современных профессиях',
          description: '* WorldSkills Russia, 2019',
        },
        {
          id: 2,
          title: 'Более 30% выпускников не работают по специальности**',
          text: 'Не понимают, как строить свой путь в учёбе и карьере',
          description: '** Росстат',
        },
        {
          id: 3,
          // eslint-disable-next-line max-len, quotes
          title: `Долговременный и стабильный успех в работе на 75% определяется soft skills и только на 25% — hard skills***`,
          text: 'Гибкие навыки становятся важнее, чем профессиональные компетенции',
          description: '*** Стенфордский исследовательский институт совместно с фондом Карнеги Мелонасстат',
        },
      ],
    };
  },
};
</script>
