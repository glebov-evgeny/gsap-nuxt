<template>
  <div>
    <Aloader />
    <div class="">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
      <NuxtLink to="/">Home page</NuxtLink>
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
