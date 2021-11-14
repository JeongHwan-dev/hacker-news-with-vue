<template>
  <div>
    <ul class="items-list">
      <li v-for="item in listItems" :key="item.id" class="items-list__post">
        <div class="post__points">
          {{ item.points || 0 }}
        </div>
        <div>
          <p class="post__item-title">
            <template v-if="item.domain">
              <a :href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <RouterLink :to="`/item/${item.id}`">
                {{ item.title }}
              </RouterLink>
            </template>
          </p>
          <span class="post__link-text">
            {{ item.time_ago }} by
            <template v-if="item.user">
              <RouterLink :to="`/user/${item.user}`" class="post__user">
                {{ item.user }}
              </RouterLink>
            </template>
            <template v-else>
              <a :href="item.url">
                {{ item.domain }}
              </a>
            </template>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    const name = this.$route.name;

    switch (name) {
      case 'news':
        this.$store.dispatch('FETCH_NEWS');
        break;
      case 'ask':
        this.$store.dispatch('FETCH_ASK');
        break;
      case 'jobs':
        this.$store.dispatch('FETCH_JOBS');
        break;
    }
  },
  computed: {
    listItems() {
      const name = this.$route.name;
      let list = [];

      switch (name) {
        case 'news':
          list = this.$store.state.news;
          break;
        case 'ask':
          list = this.$store.state.ask;
          break;
        case 'jobs':
          list = this.$store.state.jobs;
          break;
      }

      return list;
    },
  },
};
</script>

<style lang="scss" scoped>
.items-list {
  margin: 0;
  padding: 0;

  .items-list__post {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    list-style: none;

    .post__points {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
      color: #42b883;
    }
    .post__item-title {
      margin: 0;
    }
    .post__link-text {
      color: #828282;

      .post__user {
        color: #828282;
      }
    }
  }
}
</style>
