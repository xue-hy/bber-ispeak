<template>
  <div id="ispeak" class="ispeak">
    <xk-issue />
    <xk-footer />
  </div>
</template>

<script>
import XkFooter from './components/XkFooter.vue';
import XkIssue from './components/XkIssue.vue';
import XkInfo from './components/XkInfo.vue';

export default {
  components: {
    XkFooter,
    XkIssue,
    XkInfo
  }
};
</script>

<style scoped>
</style>