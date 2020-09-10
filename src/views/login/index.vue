<template>
  <div>
    <h3>{{title}}</h3>
    <input type="text" v-model="role"/>
    <button @click="login">登录</button>
    <button @click="logout">登出</button>
  </div>
</template>

<script>
export default {
  data() {
      return {
          title: "login",
          role: ''
      }
  },
  methods: {
    login() {
      this.$store.dispatch('user/login', this.role)
      this.$router.push({path: '/'})
    },
    logout() {
      this.$store.dispatch('user/logout')
    }
  }
};
</script>

<style scoped>
</style>