<template>
  <div>
    <span v-for="i in 10" :key="i">
      <svg-icon name="logo"></svg-icon>
      <svg-icon name="qq"></svg-icon>
      <svg-icon name="weixin"></svg-icon>
    </span>
  </div>
</template>

<script>
export default {
  name: "iconlist"
};
</script>

<style scoped>
.svg-icon {
  margin: 5px;
}
</style>
