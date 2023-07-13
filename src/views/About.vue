<template>
  <div class="home about">
    <el-header
      ><el-container><Header /></el-container
    ></el-header>
    <el-main>
      <el-container>
        <div class="about-main">
          <div class="about-session">
            <div class="session-title">
              <p>SACALIS</p>
              <div class="session-title-text item-middle">
                <span>VỀ CHÚNG TÔI</span>
              </div>
            </div>
            <div class="about-session-img image">
              <img src="../assets/images/bar-1.svg" alt="" />
            </div>
          </div>
          <div class="about-decs">
            <p class="m-0">
              Lorem ipsum dolor sit amet consectetur. Morbi eu pharetra purus
              porta. Nulla fermentum gravida ultricies ultricies ipsum etiam
              nibh eget ipsum. Dui sapien scelerisque suspendisse orci
              ullamcorper duis. Nullam sagittis gravida dolor scelerisque enim
              pulvinar et lorem. Lectus consectetur felis velit eu. Elementum
              gravida amet ac tempor et.Lorem ipsum dolor sit amet consectetur.
              Morbi eu pharetra purus porta. Nulla fermentum gravida ultricies
              ultricies ipsum etiam nibh eget ipsum. Dui sapien scelerisque
              suspendisse orci ullamcorper duis. Nullam sagittis gravida dolor
              scelerisque enim pulvinar et lorem. Lectus consectetur felis velit
              eu. Elementum gravida amet ac tempor et.Lorem ipsum dolor sit amet
              consectetur. Morbi eu pharetra purus porta. Nulla fermentum
              gravida ultricies ultricies ipsum etiam nibh eget ipsum. Dui
              sapien scelerisque suspendisse orci ullamcorper duis. Nullam
              sagittis gravida dolor scelerisque enim pulvinar et lorem. Lectus
              consectetur felis velit eu. Elementum gravida amet ac tempor
              et.Lorem ipsum dolor sit amet consectetur. Morbi eu pharetra purus
              porta. Nulla fermentum gravida ultricies ultricies ipsum etiam
              nibh eget ipsum. Dui sapien scelerisque suspendisse orci
              ullamcorper duis. Nullam sagittis gravida dolor scelerisque enim
              pulvinar et lorem. Lectus consectetur felis velit eu. Elementum
              gravida amet ac tempor et.Lorem ipsum dolor sit amet consectetur.
              Morbi eu pharetra purus porta. Nulla fermentum gravida ultricies
              ultricies ipsum etiam nibh eget ipsum. Dui sapien scelerisque
              suspendisse orci ullamcorper duis. Nullam sagittis gravida dolor
              scelerisque enim pulvinar et lorem. Lectus consectetur felis velit
              eu. Elementum gravida amet ac tempor et.Lorem ipsum dolor sit amet
              consectetur. Morbi eu pharetra purus porta. Nulla fermentum
              gravida ultricies ultricies ipsum etiam nibh eget ipsum. Dui
              sapien scelerisque suspendisse orci ullamcorper duis. Nullam
              sagittis gravida dolor scelerisque enim pulvinar et lorem. Lectus
              consectetur felis velit eu. Elementum gravida amet ac tempor
              et.Lorem ipsum dolor sit amet consectetur. Morbi eu pharetra purus
              porta. Nulla fermentum gravida ultricies ultricies ipsum etiam
              nibh eget ipsum. Dui sapien scelerisque suspendisse orci
              ullamcorper duis. Nullam sagittis gravida dolor scelerisque enim
              pulvinar et lorem. Lectus consectetur felis velit eu. Elementum
              gravida amet ac tempor et.Lorem ipsum dolor sit amet consectetur.
              Morbi eu pharetra purus porta. Nulla fermentum gravida ultricies
              ultricies ipsum etiam nibh eget ipsum. Dui sapien scelerisque
              suspendisse orci ullamcorper duis. Nullam sagittis gravida dolor
              scelerisque enim pulvinar et lorem. Lectus consectetur felis velit
              eu. Elementum gravida amet ac tempor et.
            </p>
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
  name: "about-view",
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss" scoped>
.about {
  &-session {
    margin-top: 48px;
    &-img {
      margin-top: 30px;
    }
  }
  &-decs {
    margin-top: 137px;
    p {
      color: var(--greyscale-0, #fff);
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }
}
</style>
