<template>
  <div class="header">
    <el-row class="align-center">
      <el-col :span="5">
        <router-link to="/" class="logo">
          <div class="logo-img image">
            <img src="../assets/logo/logo.svg" alt="" />
          </div>
        </router-link>
      </el-col>
      <el-col :span="14">
        <div class="nav">
          <ul>
            <li>
              <router-link
                to="/"
                :class="this.$route.path === '/' ? 'nav-active' : ''"
                >TRANG CHỦ</router-link
              >
            </li>
            <li>
              <router-link
                to="/lesson"
                :class="this.$route.path === '/lesson' ? 'nav-active' : ''"
                >GIÁO ÁN TẬP LUYỆN</router-link
              >
            </li>
            <li>
              <router-link
                to="/workshop"
                :class="this.$route.path === '/workshop' ? 'nav-active' : ''"
                >WORKSHOP</router-link
              >
            </li>
            <li>
              <router-link
                to="/blogs"
                :class="this.$route.path === '/blogs' ? 'nav-active' : ''"
                >BLOGS</router-link
              >
            </li>
            <li>
              <router-link
                to="/about"
                :class="this.$route.path === '/about' ? 'nav-active' : ''"
                >VỀ CHÚNG TÔI</router-link
              >
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="5" class="align-center item-right"
        ><div class="account">
          <!-- <div class="account-btn item-middle">
            <button class="sigin">Đăng nhập</button>
            <button class="sigup">Đăng ký</button>
          </div> -->
        </div></el-col
      >
    </el-row>
  </div>
</template>
<script>
export default {
  name: "header-view",
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
.header {
  /* padding: 15px 0; */
  width: 100%;
  .logo {
    &-img {
      width: 58px;
      min-width: 58px;
      height: 50px;
    }
  }
  .nav {
    height: 100%;
    display: flex;
    align-items: center;
    ul {
      list-style-type: none;
      display: flex;
      align-items: center;
      /* gap: 32px; */
      height: 100%;
      margin: 0;
      li {
        display: flex;
        align-items: center;
        height: 80px;
        justify-content: center;
        /* padding: 0 16px; */
        &:hover {
          cursor: pointer;
          background: var(--greyscale-800, #1f2937);
        }
        a {
          padding: 0 16px;
          text-decoration: none;
          color: var(--greyscale-0, #fff);
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .nav-active {
          font-weight: 600;
          position: relative;
          &::before {
            content: "";
            display: block;
            position: absolute;
            bottom: 8px;
            left: 16px;
            width: 24px;
            height: 4px;
            border-radius: 2px;
            background: var(--greyscale-0, #fff);
          }
        }
      }
    }
  }
  .account {
    &-btn {
      button {
        padding: 8px 16px;
        cursor: pointer;
      }
      .sigin {
        color: var(--greyscale-0, #fff);
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        background-color: transparent;
        border: none;
      }

      .sigup {
        border-radius: 8px;
        background: var(--greyscale-0, #fff);
        border: 0;
        color: var(--greyscale-900, #111827);
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
      }
    }
  }
}
</style>
