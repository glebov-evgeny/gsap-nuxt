<template>
  <form class="form" :class="currentClass" @submit="validateForm">
    <div class="form__wrapper" v-if="formWasSend">
      <div class="form__info">
        <h3 class="form__title">Registration</h3>
        <p class="form__description">Description text for information.</p>
      </div>
      <div class="form__content">
        <label class="form__label">
          <input
            v-model.trim="email"
            type="email"
            class="form__input"
            :class="emailError ? 'error' : ''"
            placeholder="Почта"
          />
        </label>
        <label class="form__label">
          <input
            v-model.trim="password"
            type="password"
            class="form__input"
            :class="passwordError ? 'error' : ''"
            placeholder="Пароль"
          />
        </label>
        <p class="form__error" v-if="errorMessageShow">{{ errorMessageText }}</p>
        <button class="form__button" type="submit">Отправить</button>
        <button class="form__change" type="button" @click.stop="changeFormLoginOrRegistration">- войти -</button>
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
  name: 'm-form-registration',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      email: null,
      password: null,
      emailError: false,
      passwordError: false,
      formWasSend: true,
      errorMessageText:
        'Тест сообщения об ошибке с многословным пояснением и подробным описанием проблемы, для визуализации переполнения контейнера излишней информацией.',
      errorMessageShow: false,
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
      if (this.password == null) {
        this.passwordError = true;
      } else {
        this.validPassword(this.password);
      }
      if (this.passwordError === false && this.emailError === false) {
        this.createUser();
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
    // eslint-disable-next-line no-unused-vars
    validPassword(password) {
      if (this.password.length > 6) {
        this.passwordError = false;
      } else {
        this.passwordError = true;
      }
    },
    somethingWrong(errorText) {
      this.emailError = true;
      this.passwordError = true;
      this.errorMessageText = errorText;
      this.errorMessageShow = true;
    },
    async createUser() {
      try {
        const user = await this.$fire.auth.createUserWithEmailAndPassword(this.email, this.password);
        // добавляю информацию о том, что пользователь залогинен в store и localStorage
        this.$store.commit('setToken', user.user.uid);
        localStorage.setItem('user', user.user.uid);
        this.$cookies.set('user', user.user.uid);
        // убираю сообщение об ошибках с бэка
        this.errorMessageText = '';
        this.errorMessageShow = false;
        // скрываю форму и показываю "thank-success"
        this.formWasSend = false;
        // this.$router.push('/main')
      } catch (error) {
        if (error.message === 'Firebase: Error (auth/wrong-password).') {
          this.somethingWrong('Неправильный логин/пароль.');
        } else if (
          error.message
          === 'Firebase: The email address is already in use by another account. (auth/email-already-in-use).'
        ) {
          this.somethingWrong('Пользователь с таким email уже зарегистрирован.');
        } else {
          console.error(`Ошибка: ${error.message}`);
        }
      }
    },
    changeFormLoginOrRegistration() {
      this.$emit('changeFormPopup');
    },
  },
};
</script>
