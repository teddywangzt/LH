<template>
  <div
    class="portfolio"
    v-lazy-container="{
      selector: 'img',
      loading: './static/image/logo-ph.png'
    }"
  >
    <h2 class="block-title">{{ $t("portfolio.title") }}</h2>
    <div class="tab-index">
      <span
        v-for="(item, i) in $t('portfolio.companyTypes')"
        @click="switchType(i)"
        :class="activeIndex === i ? 'active' : ''"
        :key="i"
      >
        <!-- {{ item.slice(0, 1) }} -->
      </span>
    </div>
    <div class="tab-head">
      <span
        v-for="(item, i) in $t('portfolio.companyTypes')"
        @click="switchType(i)"
        :class="activeIndex === i ? 'active' : ''"
        :key="i"
      >
        {{ item }}
      </span>
    </div>
    <div class="tab-body">
      <div v-for="(item, index) in filtered" :key="index" class="company">
        <img :data-src="item.picture" />
        <div class="pop-text">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      activeIndex: 0
    };
  },
  methods: {
    switchType(index) {
      this.activeIndex = index;
    }
  },
  computed: {
    filtered() {
      const { activeIndex } = this;
      const companies = this.$t("portfolio.companies");
      const companyTypes = this.$t("portfolio.companyTypes");
      return companies.filter(
        item => !activeIndex || item.type === companyTypes[activeIndex]
      );
    }
  }
};
</script>

<style lang="less">
.portfolio {
  .tab-index {
    display: none;
    text-align: center;
    margin-top: -33px;
    span {
      width: 28px;
      height: 28px;
      background: rgba(221, 221, 221, 1);
      border-radius: 14px;
      display: inline-block;
      line-height: 28px;
      margin: 20px 9px;
      color: #fff;
      &.active {
        background: rgba(32, 172, 102, 1);
      }
    }
    @media all and (max-width: 768px) {
      // display: block;
    }
  }
  .tab-head {
    display: flex;
    font-family: "ProximaNovaBold";
    @media all and (max-width: 768px) {
      flex-wrap: wrap;
      margin: 0 -20px;
    }
    span {
      @media all and (max-width: 1100px) {
        font-size: 16px;
      }
      @media all and (max-width: 1000px) {
        font-size: 14px;
      }
      @media all and (max-width: 768px) {
        // display: none;
        font-size: 14px;
        color: #8f9194;
        flex: 30%;
        padding: 0 10px;
        display: flex;
        height: auto;
        line-height: 26px;
        margin-bottom: 10px;
        &.active {
          // &::after {
          //   visibility: hidden;
          // }
        }
        &:nth-child(3) {
          &::after {
            visibility: hidden;
          }
        }
      }
      position: relative;
      padding: 0 25px;
      flex: 1;
      color: #272727;
      text-align: center;
      height: 105px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      line-height: 26px;
      color: rgba(39, 39, 39, 1);
      &.active {
        color: rgba(32, 172, 102, 1);
      }
      cursor: pointer;
      &::after {
        content: "/";
        color: #ddd;
        position: absolute;
        right: -2px;
        top: 50%;
        transform: translateY(-50%);
      }
      &:last-child::after {
        visibility: hidden;
      }
    }
  }
  .tab-body {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
    @media all and (max-width: 768px) {
      margin: 0 -7px;
    }
    .company {
      position: relative;
      @media (min-width: 1200px) and (max-width: 1366px) {
        width: 305px;
      }
      @media all and (max-width: 1200px) {
        width: 203px;
      }
      @media all and (max-width: 1112px) {
        width: 243px;
      }
      @media all and (max-width: 768px) {
        width: 168px;
        margin: 20px 7px 0;
      }
      @media all and (max-width: 385px) {
        width: 155px;
        margin: 20px 7px 0;
      }
      width: 320px;
      margin: 40px 15px 0;
      img {
        transform: translate3d(0, 0, 0);
        border: 1px solid #ddd;
        width: 100%;
        filter: grayscale(100%);
        &:hover {
          filter: grayscale(0);
        }
      }
      .pop-text {
        position: absolute;
        width: 100%;
        line-height: 1.2;
        padding: 13px 14px;
        bottom: 0;
        left: 0;
        background: rgba(32, 172, 102, 0.9);
        font-size: 14px;
        color: #fff;
        visibility: hidden;
        @media all and (max-width: 768px) {
          max-height: 100%;
          font-size: 12px;
          line-height: 1.4;
          padding: 8px;
        }
      }
      &:hover {
        .pop-text {
          visibility: visible;
        }
      }
    }
  }
}
</style>
