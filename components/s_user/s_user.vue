<template>
  <div class="s-user">
    <div class="s-user-content">
      <p class="s-user-text"><span>Имя:</span> {{ user.name }}</p>
      <p class="s-user-text"><span>Почта:</span> {{ user.email }}</p>
      <p class="s-user-text"><span>Username:</span> {{ user.username }}</p>
      <p class="s-user-text"><span>Website:</span> {{ user.website }}</p>
    </div>
    <router-link class="s-user-back" to="/users">вернуться</router-link>
  </div>
</template>

<script>
import './s_user.scss';

export default {
  name: 's-user',
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
