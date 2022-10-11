<template>
  <header class="s-header" ref="header" id="header">
    <div class="container">
      <nav class="s-header__nav">
        <NuxtLink to="/" class="s-header__nav-link">Главная</NuxtLink>
        <NuxtLink to="/about" class="s-header__nav-link">О компании</NuxtLink>
        <NuxtLink to="/users" class="s-header__nav-link">Пользователи</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script>
import './s_header.scss';

export default {
  name: 's-header',

  data() {
    return {};
  },

  computed: {},

  watch: {},

  methods: {},

  beforeDestroy() {},

  mounted() {},
};
</script>
