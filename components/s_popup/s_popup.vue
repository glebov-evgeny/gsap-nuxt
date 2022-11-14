<template>
  <div class="s_popup" v-if="show" @click.stop="popupIsClosed">
    <div @click.stop class="s_popup__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import './s_popup.scss';

export default {
  name: 's_popup',
  data() {
    return {};
  },
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    popupIsClosed() {
      this.$emit('popupIsClosed');
    },
  },
};
</script>
