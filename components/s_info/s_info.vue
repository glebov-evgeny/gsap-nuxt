<template>
  <div class="info">
    <div class="container info__container">
      <h2 class="title info__title">Lorem, ipsum dolor.</h2>
      <p class="description info__description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod magni illum possimus esse consectetur!
        Perspiciatis?
      </p>
      <m-form />
    </div>
  </div>
</template>

<script>
import './s_info.scss';
import MForm from '@/components/_ui/m_form/m_form';

export default {
  name: 's-info',
  components: {
    MForm,
  },
  data() {
    return {};
  },
};
</script>
