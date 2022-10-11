<template>
  <main class="main">
    <s-users-info />
    <s-users-list :users="users" />
  </main>
</template>

<script>
import getUsers from '@/api/getUsers';

export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {},
  async mounted() {
    await getUsers()
      .then(async (response) => {
        this.users = response;
      })
      .catch((e) => {
        console.error('Произошла ошибка:', e);
      });
  },
};
</script>
