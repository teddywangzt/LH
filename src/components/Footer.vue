<template>
  <div class="footer-wrap">
    <div class="footer">
      <div class="item first">
        <div class="footer-logo">
          <img src="@/assets/image/footer-logo.png" />
        </div>
        <div class="copyright">
          {{ $t("footer.copyright") }}
        </div>
      </div>
      <div class="item second">
        <div class="office sh">
          <h5>{{ $t("footer.shanghai.name") }}</h5>
          <p v-for="(p, i) in $t('footer.shanghai.addr')" :key="i">{{ p }}</p>
        </div>
        <div class="office bj">
          <h5>{{ $t("footer.beijing.name") }}</h5>
          <p v-for="(p, i) in $t('footer.beijing.addr')" :key="i">{{ p }}</p>
        </div>
      </div>
      <div class="item third">
        <div class="share">
          <!-- <a
            target="_blank"
            href="https://twitter.com/LongHillCap"
            class="twitter"
          ></a> -->
          <a
            target="_blank"
            href="http://www.linkedin.com/company/long-hill-capital"
            class="linkedin"
          ></a>
          <a
            target="_blank"
            href="http://weibo.com/u/6062054775"
            class="weibo"
          ></a>
          <a href="javascript:;" @click="showQrcode" class="wechat"></a>
        </div>
        <div class="contact-info">
          <p
            v-for="(item, i) in $t('footer.contact')"
            :key="i"
            :class="item.className"
          >
            {{ item.name }}
            <a :href="`mailto:${item.mail}`">{{ item.mail }}</a>
          </p>
        </div>
      </div>
    </div>
    <modal name="modal-wechat" height="auto" width="320px">
      <img width="100%" v-lazy="`./static/image/wechat.jpeg`" />
    </modal>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    switchLang() {
      this.$i18n.locale = this.$i18n.locale === "zh" ? "en" : "zh";
    },
    showQrcode() {
      this.$modal.show("modal-wechat");
    }
  }
};
</script>

<style lang="less">
.footer-wrap {
  background: rgba(32, 172, 102, 1);
  .footer {
    position: relative;
    margin: 0 auto;
    max-width: 1920px;
    height: 338px;
    display: flex;
    @media all and (max-width: 768px) {
      display: block;
      height: auto;
      .second {
        padding-top: 20px;
      }
    }
    .item {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding-left: 24px;
      padding-right: 24px;
      &.first {
        @media all and (max-width: 1100px) {
          display: none;
        }
        @media all and (max-width: 768px) {
          display: block;
          height: 0;
          overflow: hidden;
          position: static;
        }
      }
      @media all and (min-width: 1280px) {
        padding-left: 80px;
      }
      position: relative;
      flex: 1;
      text-align: center;
      .footer-logo {
        width: 315px;
        margin: 0 auto;
        img {
          width: 100%;
        }
      }
      .copyright {
        display: block;
        height: 26px;
        font-size: 14px;
        color: rgba(255, 255, 255, 1);
        line-height: 26px;
        white-space: nowrap;
        @media all and (max-width: 768px) {
          position: absolute;
          bottom: 20px;
          left: 0;
          width: 100%;
        }
      }
      .office {
        padding-left: 70px;
        padding-top: 20px;
        color: #fff;
        height: 110px;
        text-align: left;
        @media all and (max-width: 768px) {
          margin: 20px;
          padding-top: 15px;
          width: 100%;
        }
        &.sh {
          background: url(~@/assets/image/osh.png) left center no-repeat;
          background-size: 44px;
        }
        &.bj {
          background: url(~@/assets/image/obj.png) left center no-repeat;
          background-size: 44px;
        }
        h5 {
          font-family: "ProximaNovaBold";
          height: 25px;
          line-height: 25px;
          font-size: 21px;
          margin-bottom: 6px;
        }
        p {
          font-family: "Jervinho";
          font-size: 14px;
          line-height: 26px;
        }
      }
      &.third {
        padding-top: 40px;
        text-align: left;
        @media all and (max-width: 768px) {
          padding: 0 0 205px;
          margin: 24px 24px 0;
          .contact-info {
            padding: 1px 20px 0;
            background: rgba(27, 159, 93, 1);
            width: 100%;
          }
          .share {
            position: absolute;
            bottom: 118px;
            width: 100%;
            text-align: center;
            a {
              margin: 0 20px;
            }
          }
        }
      }
      .share {
        a {
          width: 36px;
          height: 36px;
          display: inline-block;
          border-radius: 18px;
          background: rgba(124, 199, 162, 1);
          margin-right: 60px;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: 16px;
          &.twitter {
            background-image: url(~@/assets/image/twitter.png);
          }
          &.linkedin {
            background-image: url(~@/assets/image/linkedin.png);
          }
          &.weibo {
            background-image: url(~@/assets/image/weibo.png);
          }
          &.wechat {
            background-image: url(~@/assets/image/wechat.png);
          }
        }
      }
      .contact-info {
        p {
          font-family: "Jervinho";
          min-width: 304px;
          padding-left: 26px;
          height: 20px;
          font-size: 16px;
          color: rgba(166, 212, 189, 1);
          line-height: 24px;
          margin: 27px 0;
          background-repeat: no-repeat;
          background-position: left center;
          background-size: 16px;

          &.bussiness {
            background-image: url(~@/assets/image/bussiness.png);
          }
          &.investor {
            background-image: url(~@/assets/image/investor.png);
          }
          &.media {
            background-image: url(~@/assets/image/media.png);
          }
          &.career {
            background-image: url(~@/assets/image/career.png);
          }
          a {
            font-style: normal;
            color: #fff;
            font-size: 14px;
            line-height: 24px;
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
