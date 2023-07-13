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
            <div class="lesson-filter">
              <span class="lesson-filter-label">Trình độ:</span>
              <el-checkbox v-model="level[0].isChecked" label="Tất cả" />
              <el-checkbox v-model="level[1].isChecked" label="Cơ bản" />
              <el-checkbox v-model="level[2].isChecked" label="Trung bình" />
              <el-checkbox v-model="level[3].isChecked" label="Nâng cao" />
            </div>
            <div class="lesson-grid">
              <el-row :gutter="24">
                <el-col
                  :xs="24"
                  :sm="12"
                  :md="12"
                  :lg="8"
                  :xl="6"
                  v-for="card in cardView"
                  :key="card"
                >
                  <div class="card">
                    <div class="card-img image">
                      <img :src="require(`../assets/images/${card.url}`)" />
                    </div>
                    <div class="card-title">
                      <span>{{ card.label }}</span>
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
                      <div class="card-cart">
                        <img src="../assets/icons/icon-cart.svg" alt="" />
                      </div>
                    </div>
                    <div class="card-level item-middle" :class="card.key">
                      <span>{{ getLevelbyKey(card.key) }}</span>
                    </div>
                  </div>
                </el-col>
              </el-row>
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
      level: [
        {
          label: "Tất cả",
          isChecked: true,
          key: "all",
        },
        {
          label: "Cơ bản",
          isChecked: false,
          key: "basic",
        },
        {
          label: "Trung bình",
          isChecked: false,
          key: "average",
        },
        {
          label: "Nâng cao",
          isChecked: false,
          key: "advanced",
        },
      ],
      cards: [
        {
          label: "Straddle Planche cho người mới bắt đầu",
          url: "img-card.svg",
          original: 1999999,
          share: 999999,
          key: "basic",
        },
        {
          label: "Straddle Planche cho người mới bắt đầu",
          url: "img-card.svg",
          original: 1999999,
          share: 999999,
          key: "average",
        },
        {
          label: "Straddle Planche cho người mới bắt đầu",
          url: "img-card.svg",
          original: 1999999,
          share: 999999,
          key: "average",
        },
        {
          label: "Straddle Planche cho người mới bắt đầu",
          url: "img-card.svg",
          original: 1999999,
          share: 999999,
          key: "advanced",
        },
        {
          label: "Straddle Planche cho người mới bắt đầu",
          url: "img-card.svg",
          original: 1999999,
          share: 999999,
          key: "basic",
        },
      ],
      cardView: [],
    };
  },
  watch: {
    level: {
      handler(newVal) {
        const all = newVal.find((item) => item.key === "all");
        if (all.isChecked) {
          this.cardView = this.cards;
          return;
        } else {
          let listKey = newVal.filter((item) => item.isChecked);
          listKey = listKey.map((item) => item.key);
          this.cardView = this.cards.filter((item) =>
            listKey.includes(item.key)
          );
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.cardView = this.cards;
  },
  methods: {
    getLevelbyKey(key) {
      switch (key) {
        case "basic":
          return "Cơ bản";
        case "average":
          return "Trung bình";
        case "advanced":
          return "Nâng cao";
      }
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
        }
      }
      &-footer {
        padding: 12px 16px 16px;
        display: flex;
        justify-content: space-between;
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
}
</style>
