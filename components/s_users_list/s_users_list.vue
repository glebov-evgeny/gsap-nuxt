<template>
  <section class="s-users-list">
    <h2 class="s-title">Lorem ipsum dolor sit?</h2>
    <s-users-card v-for="user of users" :user="user" :key="user.id" />
  </section>
</template>

<script>
import './s_users_list.scss';

export default {
  name: 's-users-list',
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  components: {},
  data() {
    return {};
  },
};
</script>
