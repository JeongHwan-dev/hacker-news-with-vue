<template>
  <div>
    <section class="user">
      <div class="user__container">
        <div>
          <FontAwesomeIcon icon="user" class="user__icon" />
        </div>
        <div class="user__description">
          <RouterLink :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </RouterLink>
          <div class="user__time">{{ fetchedItem.time_ago }}</div>
        </div>
      </div>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    const itemId = this.$route.params.itemId;

    this.$store.dispatch('FETCH_ITEM', itemId);
  },
};
</script>

<style lang="scss" scoped>
.user__container {
  display: flex;
  align-items: center;
  padding: 0.5rem;

  .user__icon {
    font-size: 2.5rem;
  }
  .user__description {
    padding-left: 8px;
  }
  .user__time {
    font-size: 0.7rem;
  }
}
</style>
