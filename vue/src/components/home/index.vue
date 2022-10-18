<template>
  <div>home</div>
</template>

<script>
export default {
  mounted() {
    // 判断是否登录
    !this.vuex.state.login ? this.$router.push("/login") : "";
  },
};
</script>

<style></style>
