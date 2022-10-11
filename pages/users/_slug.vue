<template>
  <main class="main">
    <div class="container">
      <s-user :user="user" />
    </div>
  </main>
</template>

<script>
import getUser from '@/api/getUser';

export default {
  data() {
    return {
      user: {},
    };
  },
  async mounted() {
    const currentUser = this.$route.params.slug;
    this.user = await getUser(currentUser);
    console.log(this.user);
  },
};
</script>
