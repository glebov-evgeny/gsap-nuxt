<template>
  <header class="header" id="header">
    <div class="container header__container">
      <div class="header__logos">
        <img src="@/assets/images/header/tiger.png" class="header__logo" alt="logo" />
      </div>
      <div class="header__menu" v-if="showMenuButton" @click="openMenu">
        <svg class="ham hamRotate hamR" viewBox="0 0 100 100" width="40" ref="ham">
          <path
            class="line top"
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
          />
          <path class="line middle" d="m 70,50 h -40" />
          <path
            class="line bottom"
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
          />
        </svg>
      </div>
      <nav class="header__nav" :class="{ _open: isOpenMenu }">
        <a
          href="#"
          v-for="link in $t('menuItems')"
          class="header__nav-link"
          :key="link.name"
          @click.prevent="
            closeMenu();
            scrollToBlock(link.target);
          "
          v-html="link.anchor"
        ></a>
        <div class="header__nav-auth">
          <button class="header__button" v-if="this.$store.state.token" @click.stop="logout">{{ $t('logout') }}</button>
          <button class="header__button" v-else @click.stop="popupIsOpen">{{ $t('login') }}</button>
        </div>
      </nav>
      <div class="header__information" v-if="!showMenuButton">
        <a :href="`tel:${phoneMobileShort}`" class="header__phone">{{ phoneMobile }}</a>
        <button class="header__button" v-if="this.$store.state.token" @click.stop="logout">{{ $t('logout') }}</button>
        <button class="header__button" v-else @click.stop="popupIsOpen">{{ $t('login') }}</button>
      </div>
    </div>
  </header>
</template>

<script>
import './s_header.scss';

export default {
  name: 's-header',
  props: {
    popupIsClosed: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isScrolled: false,
      scrollTop: 0,
      showMenuButton: false,
      showMenuBreakpoint: 767,
      isOpenMenu: false,
      windowWidth: null,
      phoneMobileShort: '+79162176557',
      phoneMobile: '+7 (916) 217-65-57',
      isLogin: false,
    };
  },

  computed: {},

  watch: {
    popupIsClosed() {
      this.closeMenu();
    },
  },

  methods: {
    handleScroll() {
      const header = this.$el;
      const headerHeight = header.offsetHeight;
      this.scrollTop = window.scrollY;
      switch (true) {
        case this.scrollTop > headerHeight:
          this.isScrolled = true;
          header.classList.add('_scrolled');
          break;
        default:
          this.isScrolled = false;
          header.classList.remove('_scrolled');
          break;
      }
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
      /* Отображение кнопки меню */
      this.showMenuButton = !(this.windowWidth > this.showMenuBreakpoint);
      /* Если меню было открытым при ресайзе */
      if (this.showMenuButton === false) {
        this.isOpenMenu = false;
      }
    },
    openMenu() {
      this.isOpenMenu = !this.isOpenMenu;
      this.$refs.ham.classList.toggle('active');
    },
    closeMenu() {
      this.isOpenMenu = false;
      if (this.$refs.ham) {
        this.$refs.ham.classList.remove('active');
      }
    },
    popupIsOpen() {
      this.$emit('popupIsOpen');
    },
    scrollToBlock(targetClass) {
      const target = document.getElementById(targetClass);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    },
    logout() {
      this.$store.dispatch('logout');
      // localStorage.removeItem('user');
      this.$cookies.remove('user');
      this.$router.push('/');
    },
  },

  mounted() {
    this.windowWidth = window.innerWidth;

    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('DOMContentLoaded', this.handleResize);
    window.addEventListener('resize', this.handleResize);

    this.handleScroll();
    this.handleResize();
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('DOMContentLoaded', this.handleResize);
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>
<i18n lang="json" src="./s_header.json" />
