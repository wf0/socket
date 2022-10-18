<template>
  <div class="box">
    <el-tabs v-model="activeName">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
    };
  },
};
</script>

<style lang="less" scoped>
.box {
  position: relative;
  .el-tabs {
    width: 50%;
  }
}
</style>
