<template>
  <div class="wrapper">
    <s-header @popupIsOpen="popupIsOpen" />
    <main class="main">
      <div class="container">
        <br />
        <p>...</p>
        <br />
        <p>Необходимо зарегистрироваться / войти</p>
        <br />
      </div>
      <s-popup :show="popuIsShow" @popupIsClosed="popupIsClosed">
        <div>...</div>
      </s-popup>
    </main>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      popuIsShow: false,
    };
  },
  mounted() {
    this.isUserLogged();
  },
  watch: {
    popuIsShow() {
      this.hideYScroll();
    },
  },
  methods: {
    hideYScroll() {
      const htmlWrapper = document.querySelector('html');
      if (this.popuIsShow) {
        htmlWrapper.style.overflow = 'hidden';
      } else {
        htmlWrapper.style.overflow = 'initial';
      }
    },
    isUserLogged() {
      // Проверяю локалсторадж, если user есть - беру значение в store
      if (localStorage.getItem('user') !== null) {
        this.$store.commit('setToken', localStorage.getItem('user'));
      }
    },
    popupIsOpen() {
      this.popuIsShow = true;
    },
    changeFormPopup() {
      this.registrationOrLoginForm = !this.registrationOrLoginForm;
    },
    popupIsClosed() {
      this.popuIsShow = false;
    },
  },
};
</script>
