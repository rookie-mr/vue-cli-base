<template>
  <svg :class="cls" v-on="$listeners">
    <use :xlink:href="n" />
  </svg>
</template>

<script>
export default {
  name: "Icons",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    cls() {
      return `svg-icon svg-icon-${this.name}`
    },
    n() {
      return `#icon-${this.name}`
    }
  }
};
</script>

<style scoped>
</style>