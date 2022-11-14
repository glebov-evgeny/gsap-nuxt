<template>
  <div v-if="loading" class="loader loader-spin"></div>
</template>

<script>
import './a_loader.scss';

export default {
  name: 'Aloader',
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>
