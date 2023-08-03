<template>
  <div class="home">
    <el-header class="item-center"
      ><el-container><Header /></el-container>
    </el-header>
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
      <div class="session item-center">
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
                    dolor scelerisque enim pulvinar et lorem. Lectus consectetur
                    felis velit eu. Elementum gravida amet ac tempor et.</span
                  >
                </div></el-col
              >
            </el-row>
          </div>
        </el-container>
      </div>

      <!-- Đội ngũ -->
      <div class="session item-center">
        <el-container>
          <div class="session-title">
            <p>THÀNH VIÊN</p>
            <div class="session-title-text item-middle">
              <span>ĐỘI NGŨ</span>
            </div>
          </div>
          <div class="session-content" style="position: relative">
            <div class="slider-detail" @mouseleave="hideDetailCard">
              <span class="slider-detail__rule">{{ cardActive.rule }}</span>
              <h3 class="slider-detail__name">{{ cardActive.name }}</h3>
              <div class="slider-detail__session">
                <div class="slider-detail__title">
                  <div class="slider-detail__title-icon image">
                    <img src="../assets/icons/icon-medal.svg" alt="" />
                  </div>
                  <span class="slider-detail__title-text"
                    >Thành tích nổi bật</span
                  >
                </div>
                <div class="slider-detail__content">
                  <ul class="slider-detail__list">
                    <li
                      v-for="exp in cardActive.exps"
                      :key="exp"
                      class="slider-detail__item"
                    >
                      {{ exp }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="slider-detail__session">
                <div class="slider-detail__title">
                  <div class="slider-detail__title-icon image">
                    <img src="../assets/icons/icon-star.svg" alt="" />
                  </div>
                  <span class="slider-detail__title-text"
                    >Tập luyện với tôi sẽ như thế nào</span
                  >
                </div>
                <div class="slider-detail__content">
                  <p class="slider-detail__content-text">
                    Tôi là một người cực kì nghiêm khắc và khó tính trong hướng
                    dẫn học viên, tôi để ý đến từng chi tiết nhỏ khi khách hàng
                    tập luyện. Nhưng không vì thế mà buổi tập trở nên nhàm chán
                    mà ngược lại luôn tràn ngập tiếng cười và cháy trong từng
                    rep tập.
                  </p>
                </div>
              </div>
            </div>
            <Carousel :items-to-show="4" :wrap-around="true">
              <Slide
                v-for="slide in listPt"
                :key="slide"
                style="position: relative"
                @mouseover="showDetailtCard($event, slide)"
                @mouseleave="hideDetailCard"
              >
                <div class="carousel__item">
                  <img :src="require(`../assets/images/${slide.url}`)" />
                </div>
                <div class="session-content-slide">
                  <div class="session-content-info">
                    <p class="session-content-info-rule">{{ slide.rule }}</p>
                    <p class="session-content-info-name">{{ slide.name }}</p>
                  </div>
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
      <div class="session item-center">
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
                      Lorem ipsum dolor sit amet consectetur. Morbi eu pharetra
                      purus porta. Nulla fermentum gravida ultricies ultricies
                      ipsum etiam nibh eget ipsum. Dui sapien scelerisque
                      suspendisse orci ullamcorper duis. Nullam sagittis gravida
                      dolor scelerisque enim pulvinar et lorem. Lectus
                      consectetur felis velit eu. Elementum gravida amet ac
                      tempor et.
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
      <div class="session item-center">
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
                      Lorem ipsum dolor sit amet consectetur. Morbi eu pharetra
                      purus porta. Nulla fermentum gravida ultricies ultricies
                      ipsum etiam nibh eget ipsum. Dui sapien scelerisque
                      suspendisse orci ullamcorper duis. Nullam sagittis gravida
                      dolor scelerisque enim pulvinar et lorem. Lectus
                      consectetur felis velit eu. Elementum gravida amet ac
                      tempor et.
                    </p>
                    <RouterLink to="/lesson"
                      ><el-button class="session-btn"
                        >Xem giáo án</el-button
                      ></RouterLink
                    >
                  </div>
                </div></el-col
              >
            </el-row>
          </div>
        </el-container>
      </div>
    </el-main>
    <el-footer class="item-center">
      <Footer />
    </el-footer>
  </div>
</template>

<script>
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
import { defineComponent } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Pagination, Slide } from "vue3-carousel";
export default defineComponent({
  name: "home-view",
  components: {
    Header,
    Carousel,
    Slide,
    Pagination,
    Footer,
    // Navigation,
  },
  data() {
    return {
      slide: null,
      cardActive: {},
      listPt: [
        {
          name: "Nguyễn Thế Đông (Đông Shifu)",
          rule: "Founder",
          url: "img-pt.svg",
          exps: [
            "Kinh nghiệm tập luyện: 8 năm",
            "Thành lập Clb Fu Street Workout",
            "Thành lập team Sacalis",
            "Top 8 VnSwcf Open cup 2015 & 2018",
            "Top 1 Muscle Up vòng loại phía tây Hà Nội 2022",
            "Top 3 Battle vòng loại phía tây Hà Nội 2022",
          ],
        },
        {
          name: "Nguyễn Thế Đông (Đông Shifu)",
          rule: "Founder",
          url: "img-pt.svg",
          exps: [
            "Kinh nghiệm tập luyện: 8 năm",
            "Thành lập Clb Fu Street Workout",
            "Thành lập team Sacalis",
            "Top 8 VnSwcf Open cup 2015 & 2018",
            "Top 1 Muscle Up vòng loại phía tây Hà Nội 2022",
            "Top 3 Battle vòng loại phía tây Hà Nội 2022",
          ],
        },
        {
          name: "Nguyễn Thế Đông (Đông Shifu)",
          rule: "Founder",
          url: "img-pt.svg",
          exps: [
            "Kinh nghiệm tập luyện: 8 năm",
            "Thành lập Clb Fu Street Workout",
            "Thành lập team Sacalis",
            "Top 8 VnSwcf Open cup 2015 & 2018",
            "Top 1 Muscle Up vòng loại phía tây Hà Nội 2022",
            "Top 3 Battle vòng loại phía tây Hà Nội 2022",
          ],
        },
        {
          name: "Nguyễn Thế Đông (Đông Shifu)",
          rule: "Founder",
          url: "img-pt.svg",
          exps: [
            "Kinh nghiệm tập luyện: 8 năm",
            "Thành lập Clb Fu Street Workout",
            "Thành lập team Sacalis",
            "Top 8 VnSwcf Open cup 2015 & 2018",
            "Top 1 Muscle Up vòng loại phía tây Hà Nội 2022",
            "Top 3 Battle vòng loại phía tây Hà Nội 2022",
          ],
        },
        {
          name: "Nguyễn Thế Đông (Đông Shifu)",
          rule: "Founder",
          url: "img-pt.svg",
          exps: [
            "Kinh nghiệm tập luyện: 8 năm",
            "Thành lập Clb Fu Street Workout",
            "Thành lập team Sacalis",
            "Top 8 VnSwcf Open cup 2015 & 2018",
            "Top 1 Muscle Up vòng loại phía tây Hà Nội 2022",
            "Top 3 Battle vòng loại phía tây Hà Nội 2022",
          ],
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
  mounted() {
    this.slide = document.querySelector(".slider-detail");
  },
  methods: {
    showDetailtCard(e, card) {
      this.cardActive = card;
      this.slide.style.left = `${e.clientX - 200}px`;
      this.slide.style.display = "block";
    },
    hideDetailCard(e) {
      if (e.relatedTarget.className.includes("slider-detail")) {
        return;
      }
      this.slide.style.display = "none";
    },
  },
});
</script>
<style lang="scss">
.home {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  .el-container {
    max-width: 1393px;
  }
  .el-header {
    /* --el-header-padding: none; */
    --el-header-height: none;
    background: var(--greyscale-900, #05070b);
    position: sticky;
    top: 0;
    z-index: 10000;
  }
  .el-main {
    /* --el-main-padding: 0 20px; */
    margin-bottom: 164px;
    flex: 1;
  }

  .el-footer {
    border-top: 1px solid #718096;
    padding-top: 23px;
    height: 100%;
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
      transform: rotateY(0) scale(1.03);
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
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }

      &-slide {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 16px 20px;
      }

      &-info {
        display: flex;
        flex-direction: column;
        p {
          margin: 0;
          text-align: left;
          color: var(--greyscale-0, #fff);
        }
        &-name {
          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
        }
        &-rule {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
        }
      }

      .slider-detail {
        display: none;
        position: absolute;
        max-width: 597px;
        top: -200px;
        z-index: 10;
        border-radius: 8px;
        border: 1px solid var(--greyscale-600, #718096);
        background: var(--greyscale-900, #05070b);
        padding: 24px;
        &__rule {
          color: var(--greyscale-0, #fff);
          font-size: 14px;
          line-height: 20px;
        }
        &__name {
          color: var(--greyscale-0, #fff);
          font-size: 20px;
          font-weight: 600;
          line-height: 28px;
          margin: 0;
        }
        &__session {
          margin-top: 24px;
        }
        &__title {
          display: flex;
          align-items: center;
          gap: 4px;
          &-icon {
            width: 24px;
            min-width: 24px;
            height: 24px;
          }
          &-text {
            color: var(--greyscale-0, #fff);
            font-size: 16px;
            font-weight: 600;
            line-height: 24px;
          }
          &__list {
          }
          &__item {
            color: var(--greyscale-0, #fff);
            font-size: 14px;
            line-height: 20px;
          }
        }
        &__content {
          margin-top: 8px;
          color: var(--greyscale-0, #fff);
          font-size: 14px;
          line-height: 20px;
        }
      }

      .carousel__item {
        img {
          border-radius: 8px;
        }
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
}
</style>
