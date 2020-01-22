<template>
  <div class="header-wrap">
    <carousel
      :perPage="1"
      :autoplay="true"
      :loop="true"
      :autoplayTimeout="3500"
      :autoplayHoverPause="false"
      :paginationSize="16"
      :navigationEnabled="true"
      :navigationClickTargetSize="20"
      paginationActiveColor="#20ac66"
      navigationPrevLabel="‹"
      navigationNextLabel="›"
      @mounted="carouselMounted"
      ref="carousel"
    >
      <slide
        :title="item.title"
        v-for="(item, i) in $t('header.slides')"
        :key="i"
      >
        <div
          :class="`slide-item idx-${i}`"
          :style="`backgroundImage: url(${item.image})`"
        >
          <!-- <h1>{{ item.title }}</h1> -->
          <!-- <p>{{ item.slogan }}</p> -->
        </div>
      </slide>
    </carousel>
    <div class="header">
      <div :class="`logo ${$t('className.logo')}`">
        <img :src="$t('header.logo')" />
      </div>
      <div @click="menuIsOpen = false" :class="`nav ${openCls}`">
        <a href="#focus">{{ $t("header.navs.thesis") }}</a>
        <a href="#about">{{ $t("header.navs.about") }}</a>
        <a href="#team">{{ $t("header.navs.team") }}</a>
        <a href="#portfolio">{{ $t("header.navs.portfolio") }}</a>
        <a href="#news">{{ $t("header.navs.news") }}</a>
        <a href="#footer">{{ $t("header.navs.contact") }}</a>
        <a class="lang" @click="switchLang">{{ $t("header.targetlang") }}</a>
      </div>
      <div :class="`nav-lines ${openCls}`" @click="toggleMenu">
        <div class="line line-one"></div>
        <div class="line line-two"></div>
        <div class="line line-three"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuIsOpen: false
    };
  },
  methods: {
    switchLang() {
      const currentLocal = this.$i18n.locale;
      window.localStorage.setItem("local", currentLocal === "zh" ? "en" : "zh");
      this.$i18n.locale = window.localStorage.getItem("local");
    },
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
    carouselMounted() {
      const $el = this.$refs.carousel.$el;
      setTimeout(() => {
        const dots = $el.querySelectorAll(".VueCarousel-dot");
        if (typeof dots === "object") {
          dots.forEach(dot => {
            dot.removeAttribute("title");
          });
        }
      }, 500);
    }
  },
  computed: {
    openCls() {
      return this.menuIsOpen ? "open" : "";
    }
  }
};
</script>

<style lang="less">
.header-wrap {
  // @media all and (max-width: 768px) {}
  @media all and (min-width: 1024px) {
    padding-top: 55px;
    .header {
      top: -77px;
    }
  }
  height: 100vh;
  background: #e8e8e8;
  .VueCarousel {
    height: 100vh;
  }
  .VueCarousel-pagination {
    margin-top: -120px;
    @media all and (max-width: 768px) {
      margin-top: -100px;
    }
    z-index: 2;
    .VueCarousel-dot {
      outline: none !important;
    }
  }
  .VueCarousel-navigation {
    .VueCarousel-navigation-button {
      transform: translateY(-60%);
      font-size: 100px;
      color: rgb(32, 172, 102);
      @media all and (max-width: 768px) {
        font-size: 60px;
        display: none;
      }
      &:focus {
        outline: none !important;
      }
      &.VueCarousel-navigation--disabled {
        opacity: 0.3;
      }
    }
  }
  .slide-item {
    height: 100vh;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 45vh;
    @media all and (max-width: 1366px) {
      background-position: center;
    }
    &.idx-1 {
      @media all and (max-width: 1366px) {
        background-position: 35% center;
      }
    }
    &.idx-2 {
      @media all and (max-width: 1366px) {
        background-position: 5% center;
      }
    }
    text-align: center;
    color: #fff;
    h1 {
      font-size: 80px;
      letter-spacing: 30px;
      font-family: "Jervinho";
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
      @media all and (max-width: 768px) {
        font-size: 40px;
        line-height: 60px;
        letter-spacing: 20px;
        font-weight: normal;
        // text-align: left;
        padding-left: 20px;
      }
    }
    p {
      text-align: center;
      letter-spacing: 20px;
      font-family: "ProximaNova";
      font-size: 33px;
      padding-top: 40px;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
      @media all and (max-width: 768px) {
        font-size: 18px;
        line-height: 26px;
        // text-align: left;
        letter-spacing: 5px;
        padding-left: 5px;
        // padding-left: 25px;
      }
    }
  }
  .header {
    @media all and (max-width: 1280px) {
      width: auto;
    }
    max-width: 1440px;
    position: relative;
    margin: -100vh auto 0;
    .logo {
      position: absolute;
      width: 213px;
      &.logo-zh {
        width: 340px;
      }
      @media all and (max-width: 1280px) {
        left: 40px;
        width: 140px;
        &.logo-zh {
          width: 240px;
          @media all and (max-width: 1100px) {
            width: 200px;
          }
        }
      }
      @media all and (max-width: 768px) {
        left: 35px;
        top: 37px;
        width: 160px;
        &.logo-zh {
          width: 200px;
        }
      }
      top: 40px;
      left: 90px;
      img {
        width: 100%;
      }
    }
    .nav-lines {
      display: none;
      position: absolute;
      top: 40px;
      right: 30px;
      @media all and (max-width: 1024px) {
        display: block;
      }
      .line {
        width: 26px;
        height: 3px;
        margin-bottom: 5px;
        background: #7d7d7d;
        transition: background 0.3s ease, transform 0.3s ease, opacity 0.1s ease;
      }
      .line-one {
        transform-origin: left;
      }
      .line-three {
        transform-origin: left;
      }
      &.open {
        .line-one {
          transform: rotateZ(45deg) translateY(-1.5px);
        }
        .line-two {
          opacity: 0;
        }
        .line-three {
          transform: rotateZ(-45deg) translateY(1.5px);
        }
      }
    }
    .nav {
      position: absolute;
      top: 44px;
      right: 76px;
      @media all and (max-width: 1024px) {
        z-index: 999;
        position: fixed;
        width: 100%;
        left: 0;
        bottom: -100%;
        top: auto;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0 5px 10px rgba(85, 87, 89, 0.3);
        transition: bottom 0.5s ease, box-shadow 0.5s ease;
        &.open {
          bottom: 0;
        }
        a {
          display: block;
          border-bottom: 1px solid rgba(125, 125, 125, 0.3);
          font-size: 20px;
          width: 100%;
          margin-left: 0 !important;
          padding: 20px 30px;
          color: #20ac66 !important;
          text-align: center;
          &.lang {
            width: 100%;
            background: none;
            padding-left: 30px;
          }
        }
      }
      a {
        font-family: "Jervinho";
        color: #000;
        font-size: 18px;
        margin-left: 20px;
        text-decoration: none;
      }
      .lang {
        cursor: pointer;
        margin-left: 80px;
        width: 75px;
        font-size: 18px;
        display: inline-block;
        padding-left: 25px;
        background: url(~@/assets/image/lang-icon.png) no-repeat left center;
        background-size: 16px;
      }
    }

    .title {
    }
  }
}
</style>
