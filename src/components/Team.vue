<template>
  <div class="people">
    <h2 class="block-title">{{ $t("team.title") }}</h2>
    <div
      v-for="(item, idx) in $t('team.group')"
      :key="idx"
      :class="`block ${idx ? 'top-space' : ''}`"
      v-lazy-container="{
        selector: 'img',
        loading: './static/image/avatar-ph.png'
      }"
    >
      <h3>{{ item.name }}</h3>
      <p>{{ item.abstract }}</p>
      <div class="member-list" v-if="!idx">
        <div
          v-for="(p_item, p_idx) in item.members"
          :key="p_idx"
          class="item"
          @click="viewProfile(p_idx, item.members)"
        >
          <img :data-src="p_item.photo" />
          <p class="name">{{ p_item.name }}</p>
          <p class="title">{{ p_item.title }}</p>
        </div>
        <div class="item"></div>
      </div>
      <div class="member-list" v-if="idx === 1">
        <a
          v-for="(p_item, p_idx) in item.members"
          :key="p_idx"
          class="item"
          target="_blank"
          :href="p_item.outlink"
        >
          <img :data-src="p_item.photo" />
          <p class="name">{{ p_item.name }}</p>
          <p class="title">{{ p_item.title }}</p>
        </a>
        <div class="item"></div>
      </div>
    </div>
    <modal
      name="modal-profile"
      width="100%"
      height="auto"
      :maxWidth="800"
      :scrollable="true"
      :adaptive="true"
      :resizable="true"
    >
      <div class="modal-content">
        <div
          class="p-brief"
          v-lazy-container="{
            selector: 'img',
            loading: './static/image/avatar-ph.png'
          }"
        >
          <div class="cover-photo">
            <img :data-src="currentProfile.photo" />
          </div>
          <div class="p-content">
            <div class="p-name">{{ currentProfile.name }}</div>
            <div class="p-title">{{ currentProfile.title }}</div>
            <div class="p-share">
              <a
                v-if="currentProfile.linkedin"
                target="_blank"
                :href="currentProfile.linkedin"
                class="linkedin"
              ></a>
              <a
                :href="`mailto:${currentProfile.email || 'bp@lhcap.cn'}`"
                class="mail"
              ></a>
            </div>
          </div>
        </div>
        <div class="p-introduction">
          <p v-for="(item, i) in currentProfile.paragraphs" :key="i">
            {{ item }}
          </p>
        </div>
      </div>
      <a href="javascript:;" @click="hideProfile" class="modal-close"></a>
      <a
        href="javascript:;"
        @click="prevProfile"
        class="modal-arrow modal-prev"
      ></a>
      <a
        href="javascript:;"
        @click="nextProfile"
        class="modal-arrow modal-next"
      ></a>
    </modal>
  </div>
</template>

<script>
export default {
  name: "Team",
  data() {
    return {
      currentProfile: {},
      currentIndex: 0,
      currentList: []
    };
  },
  methods: {
    viewProfile(index, list) {
      const data = list[index];
      if (!data || !data.paragraphs) {
        return this.$modal.hide("modal-profile");
      }
      this.currentProfile = {
        // ...this.currentProfile,
        ...data
      };
      this.currentIndex = index;
      if (!this.currentList.length) {
        this.currentList = list;
      }
      this.$modal.show("modal-profile");
    },
    hideProfile() {
      this.$modal.hide("modal-profile");
    },
    prevProfile() {
      const { currentIndex, currentList } = this;
      let prevIndex = currentIndex - 1;
      prevIndex = prevIndex < 0 ? currentList.length - 1 : prevIndex;
      while (
        prevIndex > 0 &&
        (!currentList[prevIndex] || !currentList[prevIndex]["paragraphs"])
      ) {
        prevIndex -= 1;
      }
      this.viewProfile(prevIndex, currentList);
    },
    nextProfile() {
      const { currentIndex, currentList } = this;
      let nextIndex = currentIndex + 1;
      nextIndex = nextIndex > currentList.length - 1 ? 0 : nextIndex;
      while (
        nextIndex < currentList.length - 1 &&
        (!currentList[nextIndex] || !currentList[nextIndex]["paragraphs"])
      ) {
        nextIndex += 1;
      }
      this.viewProfile(nextIndex, currentList);
    }
  }
};
</script>

<style lang="less">
.v--modal-overlay {
  background: rgba(0, 0, 0, 0.8);
  .v--modal-box {
    overflow: inherit;
  }
}
.people {
  .block {
    &.top-space {
      margin-top: 80px;
    }
    h3 {
      font-family: "ProximaNovaBold";
      height: 34px;
      font-size: 28px;
      color: rgba(32, 172, 102, 1);
      line-height: 34px;
      margin-bottom: 29px;
    }
    .member-list {
      padding-top: 40px;
      margin: 0 -20px;
      display: flex;
      flex-wrap: wrap;
      @media all and (max-width: 768px) {
        justify-content: center;
      }
      @media (min-width: 1194px) and (max-width: 1600px) {
        justify-content: center;
      }
      @media all and (max-width: 1193px) {
        justify-content: space-evenly;
        padding-left: 20px;
        padding-right: 20px;
      }
      .item {
        width: 400px;
        @media all and (max-width: 1800px) {
          width: 400px;
        }
        @media (min-width: 1194px) and (max-width: 1460px) {
          width: 350px;
        }
        @media all and (max-width: 1112px) {
          width: 314px;
        }
        @media all and (max-width: 1100px) {
          max-width: 45%;
          width: auto;
          flex: 40%;
          margin: 0 0 40px;
          // margin: 0 29px 40px;
        }
        margin: 0 20px 40px;
        img {
          transform: translate3d(0, 0, 0);
          cursor: pointer;
          width: 100%;
          margin-bottom: 20px;
          filter: grayscale(100%);
          &:hover {
            filter: grayscale(0);
          }
        }
        .name,
        .title {
          height: 26px;
          font-size: 22px;
          color: rgba(39, 39, 39, 39, 1);
          @media all and (max-width: 768px) {
            font-size: 18px;
          }
        }
        .name {
          font-family: "ProximaNovaBold";
          font-weight: bold;
        }
        .title {
          font-family: "Jervinho";
          font-weight: normal;
          font-size: 18px;
          @media all and (max-width: 768px) {
            font-size: 14px;
          }
        }
      }
    }
  }
  [data-modal="modal-profile"] {
    .v--modal {
      border-radius: 0;
    }
    .modal-content {
      text-align: center;
      padding: 40px 20px;
      .p-brief {
        display: flex;
        @media all and (max-width: 800px) {
          flex-direction: column;
        }
        .cover-photo {
          flex: 6;
          img {
            width: 100%;
          }
        }
        .p-content {
          position: relative;
          padding-left: 30px;
          flex: 4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
          @media all and (max-width: 800px) {
            text-align: center;
            padding-left: 0;
          }
          .p-name {
            font-family: "ProximaNovaBold";
            font-size: 48px;
            margin-bottom: 20px;
            @media all and (max-width: 800px) {
              margin-top: 20px;
            }
          }
          .p-title {
            font-family: "Jervinho";
            font-size: 30px;
          }
          .p-share {
            @media all and (max-width: 800px) {
              position: static;
              margin-top: 20px;
            }
            position: absolute;
            bottom: 0;
            width: 100%;
            a {
              width: 35px;
              height: 35px;
              margin: 10px;
              display: inline-block;
              border-radius: 18px;
              background: rgba(124, 199, 162, 1);
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
              &.mail {
                background-image: url(~@/assets/image/mail.png);
              }
            }
          }
        }
      }
      .p-introduction {
        margin-top: 60px;
        text-align: left;
        p {
          margin-bottom: 20px;
        }
      }
    }
    .modal-close {
      @media all and (max-width: 800px) {
        top: 40px;
        right: 20px;
        opacity: 1;
        background: rgba(0, 0, 0, 0.6);
      }
      position: absolute;
      right: 32px;
      top: 32px;
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
        height: 33px;
        width: 2px;
        background-color: #20ac66;
        @media all and (max-width: 800px) {
          background-color: #fff;
        }
      }
      &::before {
        transform: rotate(45deg);
      }
      &::after {
        transform: rotate(-45deg);
      }
    }
    .modal-arrow {
      position: absolute;
      top: 50%;
      @media all and (max-width: 800px) {
        top: 420px;
      }
      padding: 30px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
      &::before,
      &::after {
        position: absolute;
        left: 15px;
        content: " ";
        height: 33px;
        width: 2px;
        background-color: #fff;
        @media all and (max-width: 800px) {
          background-color: #20ac66;
        }
        transform-origin: 0 0;
      }
      &::before {
        transform: rotate(-135deg);
      }
      &::after {
        transform: rotate(-45deg);
      }
    }
    .modal-prev {
      left: -60px;
      @media all and (max-width: 800px) {
        left: 10px;
      }
    }
    .modal-next {
      @media all and (max-width: 800px) {
        right: 10px;
      }
      right: -60px;
      transform: rotate(180deg);
    }
  }
}
</style>
