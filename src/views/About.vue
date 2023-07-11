<template>
  <div class="home">
    <el-header
      ><el-container><Header /></el-container
    ></el-header>
    <el-container>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "../layout/Header.vue";
export default {
  name: "about-view",
  components: {
    Header,
  },
};
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  .el-header {
    /* --el-header-padding: none; */
    --el-header-height: none;
    background-color: #1f2937;
  }
}
</style>
