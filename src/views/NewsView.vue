<template>
  <div>
    <p v-for="news in fetchedNews" :key="news.id">
      {{ news.title }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedNews']),
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
};
</script>

<style></style>
