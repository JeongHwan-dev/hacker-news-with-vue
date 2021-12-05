<template>
  <div>
    <section class="user">
      <UserProfile :info="fetchedItem">
        <RouterLink slot="userName" :to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user }}
        </RouterLink>
        <template slot="time">
          {{ 'Posted ' + fetchedItem.time_ago }}
        </template>
      </UserProfile>
    </section>
    <section class="item-info">
      <h2>{{ fetchedItem.title }}</h2>
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

<style>
.item-info {
  padding: 12px 24px;
}
</style>
