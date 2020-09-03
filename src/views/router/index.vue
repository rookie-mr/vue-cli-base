<template>
  <div>
    <h3>{{title}}</h3>
    <router-view></router-view>
    <transition :name="effect.fade">
      <router-view name="login"></router-view>
    </transition>
    <transition :name="effect.slide">
      <router-view name="404"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Vue Router",
      effect: {
        fade: "fade",
        slide: "slide-fade",
      },
    };
  },
  created() {
    console.log(this.$route);
  },
  mounted() {
    setTimeout(() => {
      this.$route.params.test = "test";
      console.log("测试路由更新：", this.$route);
    }, 100);
  },
  beforeRouteEnter(to, from, next) {
    // ...
    console.log("beforeRouteEnter...");
    next((vm) => {
      console.log("beforeRouteEnter", vm, to, from);
    });
  },
  beforeRouterUpdate(to, from, next) {
    // ...
    console.log("beforeRouterUpdate...");
    next((vm) => {
      console.log("beforeRouterUpdate", vm, to, from);
    });
  },
  beforeRouteLeave(to, from, next) {
    // ...
    console.log("beforeRouteLeave...");
    next((vm) => {
      console.log("beforeRouteLeave", vm, to, from);
    });
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>