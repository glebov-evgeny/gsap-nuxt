<template>
  <header class="header" id="header">
    <div class="container header__container">
      <div class="header__logos">
        <div class="header__logo"></div>
      </div>
      <div class="header__menu">
          <svg class="ham hamRotate hamR" viewBox="0 0 100 100" width="40" onclick="this.classList.toggle('active')">
              <path class="line top" d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
              <path class="line middle" d="m 70,50 h -40" />
              <path class="line bottom" d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
          </svg>
      </div>
      <nav class="header__nav">
        <NuxtLink to="/" class="header__nav-link">Главная</NuxtLink>
        <NuxtLink to="/about" class="header__nav-link">О компании</NuxtLink>
        <NuxtLink to="/users" class="header__nav-link">Пользователи</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script>
import './s_header.scss';

export default {
  name: 's-header',

  data() {
    return {
      isScrolled: false,
      scrollTop: 0,
    };
  },

  computed: {},

  watch: {},

  methods: {
    handleScroll() {
      const header = this.$el;
      const headerHeight = header.offsetHeight;
      this.scrollTop = window.scrollY;
      switch (true) {
        case this.scrollTop > headerHeight:
          this.isScrolled = true;
          header.classList.add('_scrolled')
          break;
        default:
          this.isScrolled = false;
          header.classList.remove('_scrolled');
          break;
      }

    },
  },

  beforeDestroy() {},

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
};
</script>
