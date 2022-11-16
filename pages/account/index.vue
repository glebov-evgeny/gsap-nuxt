<template>
  <div class="wrapper">
    <s-header @popupIsOpen="popupIsOpen" :popupIsClosed="popuIsShow" />
    <main class="main">
      <div class="container">
        <br />
        <p>...</p>
        <br />
        <p>Это страница для авторизованных пользователей.</p>
        <br />
        <p>{{ this.$store.state.token }}</p>
        <br />
        <p>...</p>
        <br />
      </div>
      <s-popup :show="popuIsShow" @popupIsClosed="popupIsClosed">
        <m-form-registration v-if="registrationOrLoginForm" className="_compact" @changeFormPopup="changeFormPopup" />
        <m-form-login v-else className="_compact" @changeFormPopup="changeFormPopup" />
      </s-popup>
    </main>
  </div>
</template>

<script>
import MFormRegistration from '@/components/_ui/m_form_registration/m_form_registration';
import MFormLogin from '@/components/_ui/m_form_login/m_form_login';

export default {
  components: {
    MFormRegistration,
    MFormLogin,
  },
  middleware: 'authIn',
  data() {
    return {
      popuIsShow: false,
      registrationOrLoginForm: true,
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
