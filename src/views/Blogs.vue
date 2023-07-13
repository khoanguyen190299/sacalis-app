<template>
  <div class="home">
    <el-header
      ><el-container><Header /></el-container
    ></el-header>
    <el-main>Main</el-main>
    <el-footer><Footer /></el-footer>
  </div>
</template>

<script>
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
export default {
  name: "blogs-view",
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss"></style>
