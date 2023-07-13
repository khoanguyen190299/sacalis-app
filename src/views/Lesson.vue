<template>
  <div class="home lesson">
    <el-header
      ><el-container><Header /></el-container
    ></el-header>
    <el-main>
      <el-container>
        <div class="lesson-main">
          <div class="lesson-session">
            <div class="session-title">
              <p>SACALIS</p>
              <div class="session-title-text item-middle">
                <span>GIÁO ÁN</span>
              </div>
            </div>
          </div>
          <div class="lesson-content">
            <div class="lesson-filter">
              <span>Trình độ:</span>
              <el-checkbox v-model="checked3" label="Tất cả" border />
              <el-checkbox v-model="checked3" label="Cơ bản" border />
              <el-checkbox v-model="checked4" label="Trung bình" border />
              <el-checkbox v-model="checked4" label="Nâng cao" border />
            </div>
          </div>
        </div>
      </el-container>
    </el-main>
    <el-footer> <Footer /> </el-footer>
  </div>
</template>

<script>
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
export default {
  name: "lesson-view",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      listFilter: [],
    };
  },
};
</script>
<style lang="scss" scoped>
.lesson {
  &-session {
    margin-top: 48px;
  }
}
</style>
