<template>
  <div class="s-users-card" @click="$router.push(`users/${user.id}`)">
    <h3>{{ user.name }}</h3>
  </div>
</template>

<script>
import './s_users_card.scss';

export default {
  name: 's-users-card',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  components: {},
  data() {
    return {};
  },
};
</script>
