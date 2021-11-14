<template>
  <header id="header">
    <RouterLink to="/news" class="header__link">News</RouterLink>|
    <RouterLink to="/ask" class="header__link">Ask</RouterLink>|
    <RouterLink to="/jobs" class="header__link">Jobs</RouterLink>|
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#header {
  display: flex;
  padding: 8px;
  background-color: #42b883;
  color: #fff;

  .header__link {
    color: #fff;

    &.router-link-exact-active {
      color: #35495e;
    }
  }
}
</style>
