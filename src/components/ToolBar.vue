<template>
  <header id="header">
    <RouterLink to="/news">News</RouterLink> |
    <RouterLink to="/ask">Ask</RouterLink> |
    <RouterLink to="/jobs">Jobs</RouterLink> |
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

  a {
    color: #fff;
    text-decoration: none;

    &.router-link-exact-active {
      color: #35495e;
    }
  }
}
</style>
