<template>
  <div>
    <section class="user">
      <UserProfile :info="fetchedItem">
        <RouterLink slot="userName" :to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user }}
        </RouterLink>
        <template slot="time">{{ 'Posted ' + fetchedItem.time_ago }}</template>
      </UserProfile>
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(['fetchedItem']),
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
