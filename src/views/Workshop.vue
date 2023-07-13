<template>
  <div class="home">
    <el-header class="item-center"
      ><el-container><Header /></el-container
    ></el-header>
    <el-main class="item-center">Main</el-main>
    <el-footer class="item-center"><Footer /></el-footer>
  </div>
</template>

<script>
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
export default {
  name: "work-shop",
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss"></style>
