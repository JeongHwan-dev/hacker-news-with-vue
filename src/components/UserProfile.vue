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
  padding: 18px 24px;
  background-color: #f3f3f3;

  .user__icon {
    margin-right: 12px;
    color: #3b3b3b;
    font-size: 2.5rem;
  }
  .user__description {
    padding-left: 8px;
    font-weight: 600;
    color: #2b2b2b;

    .user__time {
      font-size: 0.7rem;
      font-weight: 400;
      color: #828282;
    }
  }
}
</style>
