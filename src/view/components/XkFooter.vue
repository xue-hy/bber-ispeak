<template>
  <div class="xk-footer">
    Powered by
    <a href="https://github.com/xue-hy/bber-ispeak" target="_blank">{{ name }}</a> v{{
      version
    }}
  </div>
</template>

<script>
import { version, name } from '../../../package.json';

export default {
  data() {
    return {
      version,
      name
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.xk-footer {
  width: 100%;
  text-align: end;
  font-size: 0.75em;
  color: #999999;
  margin-top: 1em;
}
</style>