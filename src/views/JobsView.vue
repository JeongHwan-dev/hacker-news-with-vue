<template>
  <div>
    <p v-for="job in fetchedJobs" :key="job.id">
      <a :href="job.url">{{ job.title }}</a>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedJobs']),
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
};
</script>

<style></style>
