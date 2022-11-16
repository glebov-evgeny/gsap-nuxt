<template>
  <div class="wrapper">
    <s-header @popupIsOpen="popupIsOpen" :popupIsClosed="popuIsShow" />
    <main class="main">
      <s-intro />
      <s-info />
      <s-line />
      <s-slider />
      <div class="w-full h-screen overflow-hidden" id="horizontalContainer">
        <div class="main__horizontal" id="horizontal">
          <section class="main__section _01">...</section>
          <section class="main__section _02">...</section>
          <section class="main__section _03">...</section>
        </div>
      </div>
      <s-test />
      <s-fun />
      <s-test />
      <s-popup :show="popuIsShow" @popupIsClosed="popupIsClosed">
        <m-form-registration v-if="registrationOrLoginForm" className="_compact" @changeFormPopup="changeFormPopup" />
        <m-form-login v-else className="_compact" @changeFormPopup="changeFormPopup" />
      </s-popup>
    </main>
  </div>
</template>

<script>
// import MForm from '@/components/_ui/m_form/m_form';
import { gsap } from 'gsap';
import MFormRegistration from '@/components/_ui/m_form_registration/m_form_registration';
import MFormLogin from '@/components/_ui/m_form_login/m_form_login';

export default {
  components: {
    MFormRegistration,
    MFormLogin,
  },
  data() {
    return {
      popuIsShow: false,
      registrationOrLoginForm: true,
    };
  },
  mounted() {
    this.horizontalElement();
    this.isUserLogged();
    // eslint-disable-next-line no-undef
    emailjs.init('lSiwUD9_iX1bEyngQ');
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
        htmlWrapper.style.overflow = 'auto';
      }
    },
    horizontalElement() {
      const horizontal = document.getElementById('horizontal');
      const horizontalContainer = document.getElementById('horizontalContainer');
      // console.log(horizontalContainer.clientWidth, horizontal.clientWidth)
      gsap.to('#horizontal', {
        x: () => horizontalContainer.clientWidth - horizontal.clientWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: horizontalContainer,
          pin: true,
          start: 'top top',
          end: 'bottom',
          markers: false,
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });
    },
    isUserLogged() {
      // Проверяю cookies, если user есть - беру значение в store
      if (this.$cookies.get('user')) {
        this.$store.commit('setToken', this.$cookies.get('user'));
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
