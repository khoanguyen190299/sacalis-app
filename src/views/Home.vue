<template>
  <div class="home">
    <el-header
      ><el-container><Header /></el-container>
    </el-header>
    <el-container>
      <div class="side-bar">
        <Carousel :itemsToShow="2" :wrapAround="true" :transition="500">
          <Slide v-for="slide in listBar" :key="slide">
            <div class="carousel__item">
              <div class="side-bar-item">
                <img :src="require(`../assets/images/${slide.url}`)" />
                <h3>{{ slide.label }}</h3>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Pagination />
          </template>
        </Carousel>
      </div>

      <el-main>
        <!-- Giới thiệu -->
        <div class="session">
          <el-container>
            <div class="session-title">
              <p>GIỚI THIỆU</p>
              <div class="session-title-text item-middle">
                <span>VỀ SACALIS</span>
              </div>
            </div>
            <div class="session-content">
              <el-row class="reverser" :gutter="24">
                <el-col :span="12"
                  ><div
                    class="session-content-img image align-center item-right h-100"
                  >
                    <img src="../assets/images/bar-1.svg" alt="" /></div
                ></el-col>
                <el-col :span="12"
                  ><div class="session-content-text align-center h-100">
                    <span
                      >Lorem ipsum dolor sit amet consectetur. Morbi eu pharetra
                      purus porta. Nulla fermentum gravida ultricies ultricies
                      ipsum etiam nibh eget ipsum. Dui sapien scelerisque
                      suspendisse orci ullamcorper duis. Nullam sagittis gravida
                      dolor scelerisque enim pulvinar et lorem. Lectus
                      consectetur felis velit eu. Elementum gravida amet ac
                      tempor et.</span
                    >
                  </div></el-col
                >
              </el-row>
            </div>
          </el-container>
        </div>

        <!-- Đội ngũ -->
        <div class="session">
          <el-container>
            <div class="session-title">
              <p>THÀNH VIÊN</p>
              <div class="session-title-text item-middle">
                <span>ĐỘI NGŨ</span>
              </div>
            </div>
            <div class="session-content">
              <Carousel :items-to-show="4" :wrap-around="true">
                <Slide v-for="slide in listPt" :key="slide">
                  <div class="carousel__item">
                    <img :src="require(`../assets/images/${slide.url}`)" />
                  </div>
                </Slide>

                <template #addons>
                  <Pagination />
                </template>
              </Carousel>
            </div>
          </el-container>
        </div>

        <!-- Dịch vụ -->
        <div class="session">
          <el-container>
            <div class="session-title">
              <p>HUẤN LUYỆN VIÊN</p>
              <div class="session-title-text item-middle">
                <span>DỊCH VỤ</span>
              </div>
            </div>
            <div class="session-content">
              <el-row class="" :gutter="24">
                <el-col :span="12"
                  ><div
                    class="session-content-img image align-center item-right h-100"
                  >
                    <img src="../assets/images/bar-1.svg" alt="" /></div
                ></el-col>
                <el-col :span="12"
                  ><div class="session-content-text align-center h-100">
                    <div>
                      <div></div>
                      <p class="text-align-right m-0">
                        Lorem ipsum dolor sit amet consectetur. Morbi eu
                        pharetra purus porta. Nulla fermentum gravida ultricies
                        ultricies ipsum etiam nibh eget ipsum. Dui sapien
                        scelerisque suspendisse orci ullamcorper duis. Nullam
                        sagittis gravida dolor scelerisque enim pulvinar et
                        lorem. Lectus consectetur felis velit eu. Elementum
                        gravida amet ac tempor et.
                      </p>
                      <div class="item-right">
                        <el-button class="session-btn"
                          >Đăng ký tập luyện</el-button
                        >
                      </div>
                    </div>
                  </div></el-col
                >
              </el-row>
            </div>
          </el-container>
        </div>

        <!-- Giáo án -->
        <div class="session">
          <el-container>
            <div class="session-title">
              <p>TẬP LUYỆN</p>
              <div class="session-title-text item-middle">
                <span>GIÁO ÁN</span>
              </div>
            </div>
            <div class="session-content">
              <el-row class="reverser" :gutter="24">
                <el-col :span="12"
                  ><div
                    class="session-content-img image align-center item-right h-100"
                  >
                    <img src="../assets/images/bar-1.svg" alt="" /></div
                ></el-col>
                <el-col :span="12"
                  ><div class="session-content-text align-center h-100">
                    <div>
                      <p class="m-0">
                        Lorem ipsum dolor sit amet consectetur. Morbi eu
                        pharetra purus porta. Nulla fermentum gravida ultricies
                        ultricies ipsum etiam nibh eget ipsum. Dui sapien
                        scelerisque suspendisse orci ullamcorper duis. Nullam
                        sagittis gravida dolor scelerisque enim pulvinar et
                        lorem. Lectus consectetur felis velit eu. Elementum
                        gravida amet ac tempor et.
                      </p>
                      <el-button class="session-btn">Xem giáo án</el-button>
                    </div>
                  </div></el-col
                >
              </el-row>
            </div>
          </el-container>
        </div>
      </el-main>
      <el-footer>
        <el-container>
          <div class="footer">
            <div class="space-between">
              <div class="footer-left">
                <div class="footer-logo image">
                  <img src="../assets/logo/logo.svg" alt="" />
                </div>
                <p class="footer-address">
                  Địa chỉ: Số 12 phố Khúc Thừa Dụ, Cầu Giấy, Hà Nội
                </p>
              </div>
              <div class="footer-right">
                <ul class="list-app">
                  <li class="app-item">
                    <a
                      href="https://facebook.com/"
                      target="_blank"
                      class="app-item-link"
                    >
                      <div class="app-item-icon images">
                        <img src="../assets/icons/icon-fb.svg" alt="" />
                      </div>
                    </a>
                  </li>
                  <li class="app-item">
                    <a
                      href="https://youtube.com/"
                      target="_blank"
                      class="app-item-link"
                    >
                      <div class="app-item-icon images">
                        <img src="../assets/icons/icon-youtube.svg" alt="" />
                      </div>
                    </a>
                  </li>
                  <li class="app-item">
                    <a
                      href="https://tiktok.com/"
                      target="_blank"
                      class="app-item-link"
                    >
                      <div class="app-item-icon images">
                        <img src="../assets/icons/icon-tiktok.svg" alt="" />
                      </div>
                    </a>
                  </li>
                  <li class="app-item">
                    <a
                      href="https://telegram.com/"
                      target="_blank"
                      class="app-item-link"
                    >
                      <div class="app-item-icon images">
                        <img src="../assets/icons/icon-telegram.svg" alt="" />
                      </div>
                    </a>
                  </li>
                </ul>
                <p class="footer-email">Email: sacalisvn@gmail.com</p>
                <p class="footer-phone m-0">Hotline: 0981409073</p>
              </div>
            </div>
            <div class="footer-license item-middle">
              <span>© 2023 Sacalis. All Rights Reserved.</span>
            </div>
          </div>
        </el-container>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "../layout/Header.vue";
import { defineComponent } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Pagination, Slide } from "vue3-carousel";
export default defineComponent({
  name: "HomeView",
  components: {
    Header,
    Carousel,
    Slide,
    Pagination,
    // Navigation,
  },
  data() {
    return {
      test: "../assets/images/bar-1.svg",
      listPt: [
        {
          name: "Nguyễn Thế Đông (Đông Shifu)",
          rule: "Founder",
          url: "img-pt.svg",
        },
        {
          name: "Nguyễn Thế Đông (Đông Shifu)",
          rule: "Founder",
          url: "img-pt.svg",
        },
        {
          name: "Nguyễn Thế Đông (Đông Shifu)",
          rule: "Founder",
          url: "img-pt.svg",
        },
        {
          name: "Nguyễn Thế Đông (Đông Shifu)",
          rule: "Founder",
          url: "img-pt.svg",
        },
        {
          name: "Nguyễn Thế Đông (Đông Shifu)",
          rule: "Founder",
          url: "img-pt.svg",
        },
      ],
      listBar: [
        {
          label: "Top 1 Static Team in Vietnam",
          url: "bar-1.svg",
        },
        {
          label: "Top 2 Static Team in Vietnam",
          url: "bar-1.svg",
        },
        {
          label: "Top 3 Static Team in Vietnam",
          url: "bar-1.svg",
        },
        {
          label: "Top 4 Static Team in Vietnam",
          url: "bar-1.svg",
        },
        {
          label: "Top 5 Static Team in Vietnam",
          url: "bar-1.svg",
        },
        {
          label: "Top 6 Static Team in Vietnam",
          url: "bar-1.svg",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
});
</script>
<style lang="scss">
.home {
  position: relative;
  .el-header {
    /* --el-header-padding: none; */
    --el-header-height: none;
    background-color: #1f2937;
    position: sticky;
    top: 0;
    z-index: 10000;
  }
  .el-main {
    margin-bottom: 164px;
  }

  .el-footer {
    border-top: 1px solid #718096;
    padding-top: 23px;
  }

  .side-bar {
    margin-top: 64px;
    &-item {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 8px;
      h3 {
        color: var(--greyscale-0, #fff);
        font-family: "BBold";
        font-size: 32px;
        font-weight: 700;
        line-height: 40px;
        position: absolute;
        bottom: 48px;
        left: 48px;
      }
    }
    .carousel__pagination-item {
      width: 16px !important;
    }

    .carousel * {
      width: 100%;
    }
    /* .carousel__item {
    width: 100%;
  } */
    .carousel__slide {
      padding: 5px;
    }

    .carousel__viewport {
      perspective: 2000px;
      padding: 9px 0;
    }

    .carousel__track {
      transform-style: preserve-3d;
    }

    .carousel__slide--sliding {
      transition: 0.5s;
    }

    .carousel__slide {
      opacity: 0.9;
      transform: rotateY(-20deg) scale(0.9);
    }

    .carousel__slide--active ~ .carousel__slide {
      transform: rotateY(20deg) scale(0.9);
    }

    .carousel__slide--prev {
      opacity: 1;
      transform: rotateY(-10deg) scale(0.95);
    }

    .carousel__slide--next {
      opacity: 1;
      transform: rotateY(10deg) scale(0.95);
    }

    .carousel__slide--active {
      opacity: 1;
      transform: rotateY(0) scale(1.1);
      margin-left: 24px;
      img {
        overflow: hidden;
        border-radius: 8px;
      }
    }
    .carousel__pagination-button::after {
      width: 8px;
      height: 8px;
      border-radius: 999px;
      background-color: #718096;
    }
    .carousel__pagination-button:hover::after,
    .carousel__pagination-button--active::after {
      background-color: #fff;
    }
  }

  .session {
    margin-top: 100px;
    &-title {
      width: 100%;
      position: relative;
      p {
        color: var(--greyscale-800, #323b49);
        font-family: "BBold";
        font-size: 124px;
        font-weight: 700;
        line-height: 132px;
        letter-spacing: -4.96px;
        text-align: center;
        margin: 0;
      }
      &-text {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        span {
          color: var(--greyscale-0, #fff);
          font-family: "Medium";
          font-size: 32px;
          font-weight: 500;
          line-height: 40px;
          letter-spacing: 1.28px;
        }
      }
    }
    &-content {
      margin-top: 64px;
      &-img {
        /* width: 684px;
        height: 385px; */
        max-width: 684px;
        max-height: 385px;
        img {
          border-radius: 8px;
        }
        border-radius: 8px;
        overflow: hidden;
      }
      &-text {
        color: var(--greyscale-0, #fff);
        font-family: "Regular";
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }
      .carousel * {
        width: 100%;
      }
      .carousel__pagination-item {
        width: 16px !important;
      }
      .carousel__pagination-button::after {
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background-color: #718096;
      }
      .carousel__pagination-button:hover::after,
      .carousel__pagination-button--active::after {
        background-color: #fff;
      }
      .carousel__slide {
        padding: 5px;
      }

      .carousel__viewport {
        perspective: 2000px;
        padding: 9px 0;
      }
    }
    &-btn {
      margin-top: 48px;
      color: var(--greyscale-0, #fff);
      font-family: "Semibold";
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      padding: 10px 16px;
      border-radius: 8px;
      border: 1px solid var(--greyscale-0, #fff);
      background-color: transparent;
      &:hover,
      &:focus {
        border: 1px solid var(--greyscale-500, #a0aec0);
        color: var(--greyscale-500, #a0aec0);
        background-color: transparent;
      }
    }
  }

  .footer {
    &-logo {
      width: 74px;
      min-width: 74px;
      height: 64px;
    }
    &-address {
      margin: 16px 0 0;
      color: var(--greyscale-0, #fff);
      font-family: "Regular";
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
    .list-app {
      list-style-type: none;
      display: flex;
      gap: 16px;
      justify-content: flex-end;
      .app-item {
        &-icon {
          width: 32px;
          min-width: 32px;
          height: 32px;
        }
      }
    }
    &-email {
      margin: 24px 0 0;
    }
    &-email,
    &-phone {
      color: var(--greyscale-0, #fff);
      font-family: "Regular";
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      text-align: right;
    }
    &-license {
      margin-top: 24px;
      padding: 8px;
      border-top: 1px solid#718096;
      span {
        color: var(--greyscale-600, #718096);
        font-family: "Medium";
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
      }
    }
  }
}
</style>
