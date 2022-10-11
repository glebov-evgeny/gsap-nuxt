<template>
  <button class="button" :class="classBtn">{{ title }}</button>
</template>

<script>
import './a_button.scss';

export default {
  name: 'AButton',
  props: {
    title: {
      type: String,
    },
    classBtn: {
      type: String,
      default: 'clear',
    },
  },
};
</script>
