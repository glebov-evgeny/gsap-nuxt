<template>
  <div>
    <Aloader />
    <div class="page-not-found">
      <h1 class="page-not-found__title" v-if="error.statusCode === 404">Страница не найдена</h1>
      <h1 class="page-not-found__title" v-else>Какая-то неведомая ошибка и большая грусть печаль.</h1>
      <NuxtLink to="/" class="page-not-found__link">Вернуться на главную</NuxtLink>
    </div>
  </div>
</template>

<script>
import Aloader from '~/components/_ui/a_loader/a_loader';

export default {
  name: 'error',
  components: { Aloader },
  layout: 'page_not_found',
  props: {
    error: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start();
    //   setTimeout(() => this.$nuxt.$loading.finish(), 2500);
    // });
  },
};
</script>

<style scoped lang="scss">
.page-not-found {
  padding: 1.5rem;
  &__title {
    font-size: 1.8rem;
    text-align: center;
  }
  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    max-width: 15rem;
    min-height: 3.5rem;
    margin: 0.5rem auto 0;
    border-radius: 0.5rem;
    outline: none;
    text-align: center;
  }
}
</style>
