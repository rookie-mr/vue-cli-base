<template>
  <div>
    <h3>{{title}}</h3>
  </div>
</template>

<script>
export default {
    data() {
        return {
          title: 'Vue Router'
        }
    },
    created() {
      console.log(this.$route)
    },
    mounted() {
      setTimeout(() => {
        this.$route.params.test = 'test'
        console.log('测试路由更新：', this.$route)
      }, 100)
    },
    beforeRouteEnter (to, from, next) {
      // ...
      console.log('beforeRouteEnter...')
      next(vm => {
        console.log('beforeRouteEnter', vm, to, from)
      })
    },
    beforeRouterUpdate (to, from, next) {
      // ...
      console.log('beforeRouterUpdate...')
      next(vm => {
        console.log('beforeRouterUpdate', vm, to, from)
      })
    },
    beforeRouteLeave (to, from, next) {
      // ...
      console.log('beforeRouteLeave...')
      next(vm => {
        console.log('beforeRouteLeave', vm, to, from)
      })
    }
};
</script>

<style scoped>
</style>