<template>
  <div class="news">
    <h2 class="block-title">{{ $t("news.title") }}</h2>
    <div class="list">
      <div v-for="(item, i) in toplist.slice(0, 3)" :key="i" class="item">
        <h3>{{ item.cate }}</h3>
        <a class="title" target="_blank" :href="item.link">{{ item.title }}</a>
        <p class="desc">{{ item.abstract }}</p>
        <p class="time">{{ item.date }}</p>
      </div>
    </div>
    <span @click="watchMoreNews" class="more-btn">{{
      $t("news.moretext")
    }}</span>
    <modal name="modal-news" width="100%" height="100%">
      <div class="modal-content">
        <div class="modal-news-title">{{ $t("news.title") }}</div>
        <div class="modal-tab-head">
          <span
            v-for="(item, i) in $t('news.cates')"
            @click="switchNews(i)"
            :class="activeIndex === i ? 'active' : ''"
            :key="i"
          >
            {{ item.text || item.type }}
          </span>
        </div>
        <div class="modal-tab-body">
          <div
            v-for="(item, index) in filtered"
            :key="index"
            class="modal-news-item"
          >
            <p class="title">
              <a :href="item.link">{{ item.title }}</a>
            </p>
            <p class="desc">{{ item.abstract }}</p>
            <p class="other">
              <span class="source">{{ item.source }}</span> /
              <span class="time">{{ item.date }}</span>
            </p>
          </div>
        </div>
        <a href="javascript:;" @click="hideNews" class="modal-close"></a>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      activeIndex: 0,
      newsList: window.newsData.list
    };
  },
  computed: {
    filtered() {
      const { activeIndex } = this;
      const news = this.newsList;
      const newsCates = this.$t("news.cates");
      return news.filter(
        item => !activeIndex || item.cate === newsCates[activeIndex]["type"]
      );
    },
    toplist() {
      const currentLocal = this.$i18n.locale || "zh";
      return window.newsData ? window.newsData.toplist[currentLocal] : [];
    }
  },
  methods: {
    watchMoreNews() {
      this.$modal.show("modal-news");
    },
    hideNews() {
      this.$modal.hide("modal-news");
    },
    switchNews(index) {
      this.activeIndex = index;
    }
  }
};
</script>

<style lang="less">
.news {
  .list {
    @media all and (max-width: 768px) {
      display: block;
    }
    display: flex;
    margin: 0 -25px;
    .item {
      flex: 1;
      margin: 0 25px;
      @media all and (max-width: 768px) {
        margin-bottom: 50px;
      }
      h3 {
        height: 34px;
        font-size: 28px;
        color: rgba(32, 172, 102, 1);
        line-height: 34px;
        margin-bottom: 40px;
        @media all and (max-width: 768px) {
          font-size: 22px;
          margin-bottom: 34px;
        }
      }
      .title {
        font-size: 18px;
        display: block;
        color: rgba(32, 172, 102, 1);
        line-height: 26px;
        text-decoration: underline;
        margin-bottom: 18px;
      }
      .desc {
        font-size: 16px;
      }
      .time {
        margin-top: 30px;
        color: rgba(221, 221, 221, 1);
        line-height: 16px;
        font-size: 12px;
        padding-left: 25px;
        background: url(~@/assets/image/time.png) no-repeat left top;
        background-size: 15px;
        @media all and (max-width: 768px) {
          margin-top: 20px;
        }
      }
    }
  }
  .more-btn {
    cursor: pointer;
    width: 234px;
    height: 42px;
    text-align: center;
    line-height: 42px;
    background: rgba(32, 172, 102, 1);
    border-radius: 3px;
    display: block;
    margin: 100px auto 160px;
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
  }
  [data-modal="modal-news"] {
    .v--modal {
      border-radius: 0;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
    &.v--modal-overlay.scrollable .v--modal-box {
      margin-bottom: 0;
    }
    .modal-content {
      position: relative;
      max-width: 900px;
      margin: 0 auto;
      padding-bottom: 30px;
      background: #fff;
      .modal-news-title {
        font-size: 54px;
        font-family: "Jervinho";
        text-align: center;
        padding: 80px 0 40px;
        @media all and (max-width: 1000px) {
          font-size: 40px;
        }
        @media all and (max-width: 768px) {
          font-size: 26px;
          padding: 40px 0 20px;
        }
      }
      .modal-tab-head {
        display: flex;
        margin: 0 40px;
        font-family: "ProximaNovaBold";
        @media all and (max-width: 768px) {
          margin: 0 20px;
        }
        span {
          @media all and (max-width: 1100px) {
            font-size: 16px;
          }
          @media all and (max-width: 1000px) {
            font-size: 14px;
          }
          @media all and (max-width: 768px) {
            padding: 0 10px;
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
            top: 50%;
            transform: translateY(-50%);
            right: 0;
          }
          &:last-child::after {
            visibility: hidden;
          }
        }
      }
      .modal-tab-body {
        .modal-news-item {
          flex: 1;
          margin: 45px 25px;
          @media all and (max-width: 768px) {
            margin-bottom: 50px;
            margin-top: 20px;
          }
          .title a {
            display: block;
            font-size: 20px;
            color: rgba(32, 172, 102, 1);
            line-height: 26px;
            text-decoration: underline;
            margin-bottom: 18px;
            @media all and (max-width: 768px) {
              font-size: 16px;
            }
          }
          .desc {
            font-size: 16px;
          }
          .other {
            margin-top: 20px;
            line-height: 16px;
            font-size: 12px;
            color: rgba(221, 221, 221, 1);
            @media all and (max-width: 768px) {
              margin-top: 20px;
            }
            .time {
              padding-left: 25px;
              display: inline-block;
              margin-left: 5px;
              color: rgba(221, 221, 221, 1);
              background: url(~@/assets/image/time.png) no-repeat left top;
              background-size: 15px;
            }
            .source {
              color: #999;
              margin-right: 5px;
              font-weight: bold;
            }
          }
        }
      }
    }
    .modal-close {
      position: absolute;
      right: 20px;
      top: 20px;
      width: 32px;
      height: 32px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
      &::before,
      &::after {
        position: absolute;
        left: 15px;
        content: " ";
        height: 40px;
        width: 2px;
        background-color: #20ac66;
      }
      &::before {
        transform: rotate(45deg);
      }
      &::after {
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
