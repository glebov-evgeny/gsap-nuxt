<template>
  <form class="form" :class="currentClass" @submit="validateForm">
    <div class="form__wrapper" v-if="formWasSend">
      <div class="form__info">
        <h3 class="form__title">This is form title</h3>
        <p class="form__description">Just simpl form description text for information users.</p>
      </div>
      <div class="form__content">
        <label class="form__label">
          <input
            v-model.trim="name"
            type="text"
            class="form__input"
            :class="nameError ? 'error' : ''"
            placeholder="Имя"
          />
        </label>
        <label class="form__label">
          <input
            v-model.trim="email"
            type="email"
            class="form__input"
            :class="emailError ? 'error' : ''"
            placeholder="Почта"
          />
        </label>
        <textarea v-model.trim="text" class="form__textarea" placeholder="Text"></textarea>
        <button class="form__button" type="submit">Отправить</button>
      </div>
    </div>
    <div class="form__wrapper" v-else>
      <div class="form__info _center">
        <h3 class="form__title">Пасиба!</h3>
        <p class="form__description">всё ок</p>
      </div>
    </div>
  </form>
</template>

<script>
import '../m_form/m_form';

export default {
  name: 'm-form-question',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      name: null,
      phone: null,
      email: null,
      text: null,
      nameError: false,
      emailError: false,
      formWasSend: true,
      currentClass: this.className,
    };
  },
  methods: {
    validateForm(e) {
      if (this.email == null) {
        this.emailError = true;
      } else {
        this.validEmail(this.email);
      }
      if (this.name == null) {
        this.nameError = true;
      } else {
        this.validName(this.name);
      }

      // Если валидация пройдена:
      if (this.nameError === false && this.emailError === false) {
        this.sendForm();
      }
      e.preventDefault();
    },
    validEmail(email) {
      const result = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (result.test(email)) {
        this.emailError = false;
      } else {
        this.emailError = true;
      }
    },
    validName(name) {
      const result = /^[a-zA-ZА-Яа-яЁё\s]+$/;
      if (result.test(name)) {
        this.nameError = false;
      } else {
        this.nameError = true;
      }
    },
    async sendForm() {
      const formData = {
        name: this.name,
        useremail: this.email,
        text: this.text,
      };
      try {
        // eslint-disable-next-line
        emailjs.send('service_chcob9d', 'template_509iqp1', formData);
        this.formWasSend = false;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
