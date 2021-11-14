<template>
  <div>
    <p>User ID : {{ userInfo.id }}</p>
    <p>Karma : {{ userInfo.karma }}</p>
    <p>Created : {{ userInfo.created }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    const userId = this.$route.params.userId;

    this.$store.dispatch('FETCH_USER', userId);
  },
};
</script>

<style></style>
