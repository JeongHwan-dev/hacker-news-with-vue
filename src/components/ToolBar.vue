<template>
  <header id="header">
    <div class="header__logo">Y</div>
    <nav class="header__nav">
      <RouterLink to="/news" class="header__link">News</RouterLink>
      <RouterLink to="/ask" class="header__link">Ask</RouterLink>
      <RouterLink to="/jobs" class="header__link">Jobs</RouterLink>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$logo-length: 40px;

#header {
  display: flex;
  justify-content: space-between;
  padding: 10px 24px;
  background-color: #42b883;
  color: #fff;

  .header__logo {
    width: $logo-length;
    height: $logo-length;
    border: 1.5px solid #fff;
    box-sizing: border-box;
    font-size: 26px;
    font-weight: 700;
    text-align: center;
  }

  .header__nav {
    display: flex;
    justify-content: center;
    align-items: center;

    .header__link {
      padding: 0 12px;
      font-size: 18px;
      font-weight: 500;
      color: #fff;

      &.router-link-exact-active {
        color: #35495e;
      }
    }
  }
}
</style>
