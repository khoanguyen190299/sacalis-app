<template>
  <div class="home lesson">
    <el-header class="item-center"
      ><el-container><Header /></el-container
    ></el-header>
    <el-main class="item-center">
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
            <!-- <div class="lesson-filter">
              <span class="lesson-filter-label">Trình độ:</span>
              <el-checkbox v-model="level[0].isChecked" label="Tất cả" />
              <el-checkbox v-model="level[1].isChecked" label="Cơ bản" />
              <el-checkbox v-model="level[2].isChecked" label="Trung bình" />
              <el-checkbox v-model="level[3].isChecked" label="Nâng cao" />
            </div> -->
            <div v-show="!isShowDetail" class="lesson-grid">
              <el-row :gutter="24">
                <el-col
                  :xs="24"
                  :sm="12"
                  :md="12"
                  :lg="8"
                  :xl="6"
                  v-for="card in cards"
                  :key="card"
                >
                  <div class="card">
                    <div class="card-img image">
                      <img :src="require(`../assets/images/${card.url}`)" />
                    </div>
                    <div class="card-title">
                      <span @click="showDetailLesson(card)">{{
                        card.label
                      }}</span>
                    </div>
                    <div class="card-footer">
                      <div class="card-price align-center">
                        <span class="card-price__original">{{
                          card.original.toLocaleString() + "đ"
                        }}</span>
                        <span class="card-price__share">{{
                          card.share.toLocaleString() + "đ"
                        }}</span>
                      </div>
                      <!-- <div class="card-cart">
                        <img src="../assets/icons/icon-cart.svg" alt="" />
                      </div> -->
                    </div>
                    <!-- <div class="card-level item-middle" :class="card.key">
                      <span>{{ getLevelbyKey(card.key) }}</span>
                    </div> -->
                  </div>
                </el-col>
              </el-row>
            </div>
            <div v-if="isShowDetail" class="card-detail">
              <div class="card-detail-content">
                <h3 class="card-detail-title">{{ card.label }}</h3>
                <div>
                  <div class="lesson image">
                    <img
                      class="lesson-img"
                      :src="require(`../assets/images/${card.url}`)"
                    />
                    <div class="lesson-content">
                      <div class="sale">
                        <span v-if="card.isSale">Sale!</span>
                      </div>
                      <div class="lesson-footer">
                        <div class="lesson-footer-main">
                          <div class="lesson-footer-price">
                            <span class="lesson-footer-price-original">{{
                              card.original.toLocaleString() + "đ"
                            }}</span>
                            <span class="lesson-footer-price-share">{{
                              card.share.toLocaleString() + "đ"
                            }}</span>
                          </div>
                          <button class="lesson-footer-btn">
                            Đăng ký ngay
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="card.listObject.length"
                    class="note"
                    style="margin-top: 80px"
                  >
                    <h5 class="note-title">Đối tượng</h5>
                    <ul class="note-list">
                      <li
                        class="note-item"
                        v-for="item in card.listObject"
                        :key="item"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                  <div v-if="card.listRequest.length" class="note">
                    <h5 class="note-title">Yêu cầu</h5>
                    <ul class="note-list">
                      <li
                        class="note-item"
                        v-for="item in card.listRequest"
                        :key="item"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-container>
    </el-main>
    <el-footer class="item-center"> <Footer /> </el-footer>
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
      // level: [
      //   {
      //     label: "Tất cả",
      //     isChecked: true,
      //     key: "all",
      //   },
      //   {
      //     label: "Cơ bản",
      //     isChecked: false,
      //     key: "basic",
      //   },
      //   {
      //     label: "Trung bình",
      //     isChecked: false,
      //     key: "average",
      //   },
      //   {
      //     label: "Nâng cao",
      //     isChecked: false,
      //     key: "advanced",
      //   },
      // ],
      cards: [
        {
          label: "Straddle Planche cho người mới bắt đầu",
          url: "img-card.svg",
          original: 1999999,
          share: 999999,
          key: "basic",
          isSale: true,
          listObject: [
            "Lorem ipsum dolor sit amet consectetur.",
            "Dignissim vitae ornare ornare sit fusce orci.",
            " Enim tortor cum quis nibh vulputate ornare. ",
          ],
          listRequest: [
            "Lorem ipsum dolor sit amet consectetur.",
            "Dignissim vitae ornare ornare sit fusce orci.",
            " Enim tortor cum quis nibh vulputate ornare. ",
          ],
        },
        {
          label: "Straddle Planche cho người mới bắt đầu",
          url: "img-card.svg",
          original: 1999999,
          share: 999999,
          key: "average",
          isSale: true,
          listObject: [
            "Lorem ipsum dolor sit amet consectetur.",
            "Dignissim vitae ornare ornare sit fusce orci.",
            " Enim tortor cum quis nibh vulputate ornare. ",
          ],
          listRequest: [
            "Lorem ipsum dolor sit amet consectetur.",
            "Dignissim vitae ornare ornare sit fusce orci.",
            " Enim tortor cum quis nibh vulputate ornare. ",
          ],
        },
        {
          label: "Straddle Planche cho người mới bắt đầu",
          url: "img-card.svg",
          original: 1999999,
          share: 999999,
          key: "average",
          isSale: true,
          listObject: [
            "Lorem ipsum dolor sit amet consectetur.",
            "Dignissim vitae ornare ornare sit fusce orci.",
            " Enim tortor cum quis nibh vulputate ornare. ",
          ],
          listRequest: [
            "Lorem ipsum dolor sit amet consectetur.",
            "Dignissim vitae ornare ornare sit fusce orci.",
            " Enim tortor cum quis nibh vulputate ornare. ",
          ],
        },
        {
          label: "Straddle Planche cho người mới bắt đầu",
          url: "img-card.svg",
          original: 1999999,
          share: 999999,
          key: "advanced",
          isSale: true,
          listObject: [
            "Lorem ipsum dolor sit amet consectetur.",
            "Dignissim vitae ornare ornare sit fusce orci.",
            " Enim tortor cum quis nibh vulputate ornare. ",
          ],
          listRequest: [
            "Lorem ipsum dolor sit amet consectetur.",
            "Dignissim vitae ornare ornare sit fusce orci.",
            " Enim tortor cum quis nibh vulputate ornare. ",
          ],
        },
        {
          label: "Straddle Planche cho người mới bắt đầu",
          url: "img-card.svg",
          original: 1999999,
          share: 999999,
          key: "basic",
          isSale: true,
          listObject: [
            "Lorem ipsum dolor sit amet consectetur.",
            "Dignissim vitae ornare ornare sit fusce orci.",
            " Enim tortor cum quis nibh vulputate ornare. ",
          ],
          listRequest: [
            "Lorem ipsum dolor sit amet consectetur.",
            "Dignissim vitae ornare ornare sit fusce orci.",
            " Enim tortor cum quis nibh vulputate ornare. ",
          ],
        },
      ],
      isShowDetail: false,
      card: {},
    };
  },
  watch: {
    // level: {
    //   handler(newVal) {
    //     const all = newVal.find((item) => item.key === "all");
    //     if (all.isChecked) {
    //       this.cardView = this.cards;
    //       return;
    //     } else {
    //       let listKey = newVal.filter((item) => item.isChecked);
    //       listKey = listKey.map((item) => item.key);
    //       this.cardView = this.cards.filter((item) =>
    //         listKey.includes(item.key)
    //       );
    //     }
    //   },
    //   deep: true,
    // },
  },
  mounted() {
    // this.cardView = this.cards;
  },
  methods: {
    // getLevelbyKey(key) {
    //   switch (key) {
    //     case "basic":
    //       return "Cơ bản";
    //     case "average":
    //       return "Trung bình";
    //     case "advanced":
    //       return "Nâng cao";
    //   }
    // },
    showDetailLesson(card) {
      this.isShowDetail = true;
      this.card = card;
    },
  },
};
</script>
<style lang="scss">
.lesson {
  &-session {
    margin-top: 48px;
  }
  &-content {
  }
  &-filter {
    &-label {
      color: var(--greyscale-0, #fff);
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      margin-right: 8px;
    }
    .el-checkbox {
      margin-right: 8px;
    }
    .el-checkbox__input {
      display: none;
    }
    .el-checkbox__label {
      color: var(--greyscale-0, #fff);
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      padding: 4px 8px;
      border-radius: 4px;
      border: 1px solid var(--greyscale-0, #fff);
    }
    .el-checkbox__input.is-checked + .el-checkbox__label {
      color: var(--greyscale-0, #fff);
      background: var(--greyscale-600, #718096);
      border: 1px solid var(--greyscale-0, #718096);
    }
  }
  &-grid {
    .el-col {
      margin-top: 24px;
    }
    .card {
      position: relative;
      background-color: #1f2937;
      border-radius: 8px;
      overflow: hidden;
      &-img {
        /* width: 330px; */
        width: 100%;
        /* height: 330px; */
        height: auto;
      }
      &-title {
        margin: 16px 16px 0;
        span {
          color: #fff;
          font-size: 20px;
          font-weight: 500;
          line-height: 28px;
          cursor: pointer;
        }
      }
      &-footer {
        padding: 12px 16px 16px;
        display: flex;
        justify-content: flex-end;
      }
      &-price {
        span {
          font-size: 16px;
          line-height: 24px;
        }
        &__original {
          color: var(--greyscale-600, #718096);
          font-weight: 400;
          text-decoration: line-through;
        }
        &__share {
          color: #fff;
          font-weight: 600;
          margin-left: 4px;
        }
      }
      &-cart {
        width: 28px;
        min-width: 28px;
        height: 28px;
        cursor: pointer;
      }
      &-level {
        position: absolute;
        top: 8px;
        left: 8px;
        padding: 4px 8px;
        border-radius: 4px;
        height: 32px;
        span {
          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
        }
      }
      .basic {
        color: var(--greyscale-900, #111827);
        background: var(--greyscale-0, #fff);
      }
      .average {
        color: var(--greyscale-0, #fff);
        background: var(--greyscale-600, #718096);
      }
      .advanced {
        background: var(--greyscale-900, #111827);
        color: var(--greyscale-0, #fff);
      }
    }
  }
  .card-detail {
    display: flex;
    justify-content: center;
    margin-top: 80px;
    &-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
    }
    &-title {
      color: var(--greyscale-0, #fff);
      font-size: 40px;
      font-weight: 600;
      line-height: 48px;
      margin: 0;
    }
    .lesson {
      margin-top: 48px;
      width: 684px;
      height: 385px;
      position: relative;
      border-radius: 8px;
      background: #718096;
      overflow: hidden;
      &-img {
        width: 100%;
      }
      &-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .sale {
          position: absolute;
          top: 26px;
          left: 16px;
          padding: 4px 16px;
          display: flex;
          height: 32px;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          background: #fe2112;
          span {
            color: #fff;
            font-size: 16px;
            font-weight: 600;
            line-height: 24px;
          }
        }
      }
      &-footer {
        position: absolute;
        bottom: 24px;
        right: 24px;
        display: flex;
        justify-content: flex-end;
        &-main {
          display: flex;
          align-items: center;
        }
        &-price {
          display: flex;
          align-items: center;
          gap: 4px;
          span {
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
          }
          &-original {
            color: var(--greyscale-700, #323b49);
            text-decoration: line-through;
          }
          &-share {
            color: var(--greyscale-0, #fff);
            font-weight: 600;
          }
        }
        &-btn {
          height: 40px;
          display: flex;
          align-items: center;
          margin-left: 16px;
          border-radius: 8px;
          background: var(--greyscale-0, #fff);
          padding: 10px 16px;
          color: var(--greyscale-900, #111827);
          font-size: 14px;
          font-weight: 600;
          line-height: 20px;
          border: 0;
          &:hover {
            cursor: pointer;
            background: var(--greyscale-600, #718096);
          }
        }
      }
    }
    .note {
      margin-top: 24px;
      &-title {
        margin: 0;
        color: var(--greyscale-0, #fff);
        font-size: 24px;
        font-weight: 600;
        line-height: 32px;
        letter-spacing: 0.96px;
      }
      &-list {
        margin-top: 8px;
        color: var(--greyscale-0, #fff);
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }
    }
  }
}
</style>
