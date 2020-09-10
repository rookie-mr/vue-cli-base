<template>
  <div>
    <h3>{{tips}}</h3>
    <p class="info">Sass @mixin @include Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis temporibus officiis, similique iure minima iusto inventore architecto at dolore, laboriosam nobis dolorum voluptas, odio esse molestias repellendus itaque. Omnis, totam.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tips: "404 页面未找到！"
    };
  }
};
</script>

<style scoped lang="scss">
.info {
  height: 1rem;
  @include overflow-ellipse;
}
</style>