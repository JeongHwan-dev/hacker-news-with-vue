<template>
  <div id="app">
    <ToolBar />
    <Transition name="page">
      <RouterView />
    </Transition>
    <Spinner :loading="loadingStatus" />
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus.js';

export default {
  name: 'App',
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
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
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
