<template>
  <div>
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:enter-cancelled="enterCancelled"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave"
      v-on:leave-cancelled="leaveCancelled"
    ></transition>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // --------
    // 进入中
    // --------

    beforeEnter: function(el) {
      // ...
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    enter: function(el, done) {
      // ...
      done();
    },
    afterEnter: function(el) {
      // ...
    },
    enterCancelled: function(el) {
      // ...
    },

    // --------
    // 离开时
    // --------

    beforeLeave: function(el) {
      // ...
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    leave: function(el, done) {
      // ...
      done();
    },
    afterLeave: function(el) {
      // ...
    },
    // leaveCancelled 只用于 v-show 中
    leaveCancelled: function(el) {
      // ...
    }
  }
};
</script>

<style lang="stylus"></style>