<template>
  <div>
    <h3>{{title}}</h3>
    <input type="text" v-model="role"/>
    <br><br>
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
      // 找到重定向路径或者系统首页
      const redirect = this.$route.query?.redirect || '/'
      this.$router.replace(redirect)
    },
    logout() {
      this.$store.dispatch('user/logout')
    }
  }
};
</script>

<style scoped>
</style>