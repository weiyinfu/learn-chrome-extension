<template>
  <div class="Home">
    hello,you clicked for {{count}} times.
    <button @click="onclick">点击我</button>
  </div>
</template>
<script>

export default {
  data() {
    return {
      count: 0,
    }
  },
  component: {},
  mounted() {
  },
  methods: {
    onclick() {
      this.$data.count++;
    }
  }
}
</script>

<style lang="less">
.Home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .group {
    border: 1px solid;
    padding: 13px;
    margin: 4px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>