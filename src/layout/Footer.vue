<template>
  <el-container>
    <div class="footer">
      <div class="space-between">
        <div class="footer-left">
          <a href="/" class="footer-logo image">
            <img src="../assets/logo/logo.svg" alt="" />
          </a>
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
</template>
<script>
export default {
  name: "footer-view",
};
</script>
<style lang="scss">
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
</style>
