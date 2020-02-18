<template>
  <div id="app" :class="`app-wrap ${$t('className.app')}`">
    <Header></Header>
    <div class="app-content">
      <Focus id="focus"></Focus>
      <About id="about"></About>
      <Team id="team"></Team>
      <Portfolio id="portfolio"></Portfolio>
      <News id="news"></News>
    </div>
    <Footer id="footer"></Footer>
    <back-to-top bottom="20px" right="20px">
      <a href="javascript:;" class="btn-to-top"></a>
    </back-to-top>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Focus from "@/components/Focus.vue";
import About from "@/components/About.vue";
import Team from "@/components/Team.vue";
import Portfolio from "@/components/Portfolio.vue";
import News from "@/components/News.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "home",
  components: {
    Header,
    Focus,
    About,
    Team,
    Portfolio,
    News,
    Footer
  }
};
</script>
<style lang="less">
@media all and (max-width: 384px) {
  .app-wrap {
  }
}

.app-wrap {
  h2.block-title {
    font-size: 65px;
    font-family: "Jervinho";
    em {
      font-style: normal;
      color: #20ac66;
    }
    @media all and (max-width: 1000px) {
      font-size: 40px;
    }
    padding: 160px 0 60px;
    text-align: center;
    @media all and (max-width: 520px) {
      font-size: 17px !important;
    }
    @media all and (max-width: 740px) {
      position: relative;
      height: 47px;
      background: rgba(32, 172, 102, 1);
      display: inline-block;
      font-size: 24px;
      line-height: 47px;
      padding: 0 22px 48px 28px;
      margin-top: 60px;
      margin-bottom: 48px;
      color: #fff;
      margin-left: -25px;
      &::after {
        content: "";
        display: block;
        width: 20px;
        height: 60px;
        background: #fff;
        position: absolute;
        right: -20px;
        top: 0;
        transform-origin: top left;
        transform: rotate(8deg);
      }
      em {
        color: #fff;
      }
    }
  }
  .app-content {
    padding: 0 90px;
    max-width: 1920px;
    margin: 0 auto;
    @media all and (max-width: 1366px) {
      padding: 0 25px;
    }
  }
  p {
    font-size: 1.125rem;
    line-height: 1.5;
    font-family: "ProximaNova";
    text-align: justify;
  }
  .btn-to-top {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    display: block;
    background: rgba(0, 0, 0, 0.6);
    transition: all 0.4s ease-in;
    display: flex;
    justify-content: center;
    align-items: center;
    &::before,
    &::after {
      content: "";
      width: 15px;
      height: 2px;
      display: block;
      background: #fff;
      position: relative;
      top: -5px;
    }
    &::before {
      transform-origin: right;
      transform: rotate(-45deg);
      left: 1px;
    }
    &::after {
      transform-origin: left;
      transform: rotate(45deg);
    }
  }
  &.app-en {
    .header-wrap .slide-item {
      h1,
      p {
        letter-spacing: 0;
      }
    }
    .portfolio .tab-head span {
      @media all and (max-width: 768px) {
        padding: 0 20px;
      }
    }
  }
}
</style>
