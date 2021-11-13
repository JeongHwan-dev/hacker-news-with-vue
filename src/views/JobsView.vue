<template>
  <div>
    <div v-for="job in fetchedJobs" :key="job.id">
      {{ job.title }}
    </div>
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
