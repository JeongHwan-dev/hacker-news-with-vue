<template>
  <div id="app">
    <ToolBar />
    <Transition name="page">
      <RouterView />
    </Transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  name: 'App',
  components: {
    ToolBar,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

a {
  color: #344952;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    color: #42b883;
    text-decoration: underline;
  }
  &.router-link-exact-active {
    text-decoration: underline;
  }
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
