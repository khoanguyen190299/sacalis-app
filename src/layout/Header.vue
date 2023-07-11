<template>
  <div class="header">
    <el-row>
      <el-col :span="5"
        ><div class="logo">
          <div class="logo-img image">
            <img src="../assets/logo/logo.svg" alt="" />
          </div></div
      ></el-col>
      <el-col :span="14">
        <div class="nav">
          <ul>
            <li>
              <router-link
                to="/"
                :class="this.$route.path === '/' ? 'nav-active' : ''"
                >Trang chủ</router-link
              >
            </li>
            <li>
              <router-link
                to="/lesson"
                :class="this.$route.path === '/lesson' ? 'nav-active' : ''"
                >Giáo án tập luyện</router-link
              >
            </li>
            <li>
              <router-link
                to="/workshop"
                :class="this.$route.path === '/workshop' ? 'nav-active' : ''"
                >Workshop</router-link
              >
            </li>
            <li>
              <router-link
                to="/blogs"
                :class="this.$route.path === '/blogs' ? 'nav-active' : ''"
                >Blogs</router-link
              >
            </li>
            <li>
              <router-link
                to="/about"
                :class="this.$route.path === '/about' ? 'nav-active' : ''"
                >Về chúng tôi</router-link
              >
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="5" class="align-center"
        ><div class="account">
          <div class="account-btn item-middle">
            <button class="sigin">Đăng nhập</button>
            <button class="sigup">Đăng ký</button>
          </div>
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
  padding: 15px 0;
  width: 100%;
  .logo {
    &-img {
      width: 58px;
      min-width: 58px;
      height: 50px;
    }
  }
  .nav {
    ul {
      list-style-type: none;
      display: flex;
      align-items: center;
      gap: 32px;
      li {
        a {
          text-decoration: none;
          color: var(--greyscale-0, #fff);
          font-family: "Medium";
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
        }
        .nav-active {
          font-family: "Semibold";
          font-weight: 600;
          position: relative;
          &::before {
            content: "";
            display: block;
            position: absolute;
            bottom: -8px;
            left: 0;
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
        font-family: "Medium";
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
        font-family: "Semibold";
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
      }
    }
  }
}
</style>
