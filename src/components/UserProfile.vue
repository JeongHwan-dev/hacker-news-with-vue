<template>
  <div class="user__container">
    <div>
      <FontAwesomeIcon icon="user" class="user__icon" />
    </div>
    <div class="user__description">
      <slot name="userName"></slot>
      <div class="user__time">
        <slot name="time"></slot>
        <slot name="karma"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
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
