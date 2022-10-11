<template>
  <section class="s-about-info">
    <h2 class="s-title">О компании</h2>
    <AButton title="кнопка исчо" classBtn="s-about-info-btn" />
  </section>
</template>

<script>
import './s_about_info.scss';
import AButton from '@/components/_ui/a_button/a_button';

export default {
  name: 's-about-info',
  components: {
    AButton,
  },
  data() {
    return {};
  },
};
</script>
