<template>
  <div>
    <p v-for="news in fetchedNews" :key="news.id">
      <a :href="news.url">{{ news.title }}</a>
      <span>
        {{ news.time_ago }} by
        <RouterLink :to="`/user/${news.user}`">
          {{ news.user }}
        </RouterLink>
      </span>
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
