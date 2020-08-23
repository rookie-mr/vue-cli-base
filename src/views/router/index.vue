<template>
  <div>
    <h5>Router</h5>
    {{r}}
  </div>
</template>

<script>
export default {
    data() {
        return {
          r: 'dynamic router'
        }
    },
    created() {
      console.log(this.$route)
    }
};
</script>

<style scoped>
</style>