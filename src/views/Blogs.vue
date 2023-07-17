<template>
  <div class="home">
    <el-header class="item-center"
      ><el-container><Header /></el-container
    ></el-header>
    <el-main class="item-center">
      <el-container>
        <div class="about-main">
          <div class="about-session">
            <div class="session-title">
              <p>SACALIS</p>
              <div class="session-title-text item-middle">
                <span>BLOG</span>
              </div>
            </div>
          </div>
        </div>
        <div class="blog-content">
          <el-row :gutter="24">
            <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
              <div class="blog-posts">
                <div
                  class="blog-item"
                  v-for="(item, index) in items"
                  :key="index"
                  :class="index === 0 ? 'mt-0' : ''"
                >
                  <div class="blog-item-content">
                    <a href="#" class="blog-item-title">
                      <h3 class="m-0">{{ item.title }}</h3>
                    </a>
                    <div class="blog-item-text">
                      <p>{{ item.message }}</p>
                    </div>
                  </div>
                  <div class="blog-item-img image">
                    <img :src="item.img_src" alt="" />
                  </div>
                </div></div
            ></el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
              <div class="blog-key">
                <div class="blog-key-title">
                  <span>KHÁM PHÁ CÁC CHỦ ĐỀ</span>
                </div>
                <div class="blog-key-list">
                  <p class="blog-key-item" v-for="key in keys" :key="key">
                    {{ key }}
                  </p>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="blog-pagination item-middle w-100">
          <ul>
            <li>
              <a href="#" class="item-middle pagination-active"> 1 </a>
            </li>
            <li>
              <a href="#" class="item-middle"> 2 </a>
            </li>
            <li>
              <a href="#" class="item-middle"> 3 </a>
            </li>
          </ul>
        </div>
      </el-container>
    </el-main>
    <el-footer class="item-center"><Footer /></el-footer>
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
  data() {
    return {
      items: [
        {
          title: "Tại sao lại là CALISTHENICS?",
          message:
            "Điểm mạnh của Calisthenics đó chính là chúng ta có thể tập luyện mọi lúc, mọi nơi với chính cơ thể mà không yêu thiết bị, máy móc phức tạp. Vô vàn bài tập với chính trọng lượng cơ thể sẽ giúp chúng ta thoả sứ...",
          img_src: "",
        },
        {
          title: "Tìm cấp độ tập luyện phù hợp",
          message:
            "Điểm mạnh của Calisthenics đó chính là chúng ta có thể tập luyện mọi lúc, mọi nơi với chính cơ thể mà không yêu thiết bị, máy móc phức tạp. Vô vàn bài tập với chính trọng lượng cơ thể sẽ giúp chúng ta thoả sứ...",
          img_src: "",
        },
        {
          title: "Tại sao lại là CALISTHENICS?",
          message:
            "Điểm mạnh của Calisthenics đó chính là chúng ta có thể tập luyện mọi lúc, mọi nơi với chính cơ thể mà không yêu thiết bị, máy móc phức tạp. Vô vàn bài tập với chính trọng lượng cơ thể sẽ giúp chúng ta thoả sứ...",
          img_src: "",
        },
        {
          title: "Tại sao lại là CALISTHENICS?",
          message:
            "Điểm mạnh của Calisthenics đó chính là chúng ta có thể tập luyện mọi lúc, mọi nơi với chính cơ thể mà không yêu thiết bị, máy móc phức tạp. Vô vàn bài tập với chính trọng lượng cơ thể sẽ giúp chúng ta thoả sứ...",
          img_src: "",
        },
        {
          title: "Tại sao lại là CALISTHENICS?",
          message:
            "Điểm mạnh của Calisthenics đó chính là chúng ta có thể tập luyện mọi lúc, mọi nơi với chính cơ thể mà không yêu thiết bị, máy móc phức tạp. Vô vàn bài tập với chính trọng lượng cơ thể sẽ giúp chúng ta thoả sứ...",
          img_src: "",
        },
      ],
      keys: [
        "Người mới",
        "Back Lever",
        "Push up",
        "Human Flag",
        "Full Planche",
        "One Leg Front Lever",
        "Iron Cross",
        "Clap Push up",
        "Victorian",
        "Elbow Lever",
        "One Arm Back Lever",
        "Handstand",
        "90% Handstand Push up",
        "Muscle up",
      ],
    };
  },
};
</script>
<style lang="scss">
.blog-content {
  margin-top: 80px;
  .blog-item {
    display: flex;
    gap: 24px;
    margin-top: 24px;
    &-img {
      width: 212px;
      min-width: 212px;
      height: 152px;
      border-radius: 4px;
      background: var(--greyscale-600, #718096);
      overflow: hidden;
    }
    &-content {
    }
    &-title {
      h3 {
        color: var(--greyscale-0, #fff);
        font-size: 24px;
        font-weight: 600;
        line-height: 32px;

        /* white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden; */
      }
    }
    &-text {
      p {
        color: var(--greyscale-600, #718096);
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        margin: 16px 0 0;
        height: 100px;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
.blog-key {
  &-title {
    color: var(--greyscale-0, #fff);
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
  }
  &-list {
    margin-top: 4px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  &-item {
    border-radius: 20px;
    background: var(--greyscale-700, #323b49);
    padding: 8px 12px;
    color: var(--greyscale-400, #cbd5e0);
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin: 0;
    cursor: pointer;
  }
}
.blog-pagination {
  margin-top: 80px;
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 12px;
    li {
      a {
        border-radius: 8px;
        border: 1px solid var(--greyscale-0, #fff);
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        color: var(--greyscale-0, #fff);
        width: 36px;
        height: 36px;
      }
    }
  }
  .pagination-active {
    background: var(--greyscale-0, #fff);
    color: var(--greyscale-900, #111827);
  }
}
</style>
