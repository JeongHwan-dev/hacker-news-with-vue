<template>
  <div>
    <p v-for="ask in fetchedAsk" :key="ask.id">
      <RouterLink :to="`/item/${ask.id}`">
        {{ ask.title }}
      </RouterLink>
      <span>{{ ask.time_ago }} by {{ ask.user }}</span>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedAsk']),
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
};
</script>

<style></style>
