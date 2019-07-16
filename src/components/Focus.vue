<template>
  <div class="focus">
    <h2 class="block-title">{{ $t("focus.title") }}</h2>
    <div class="block-content">
      <div class="panel">
        <h3>{{ $t("focus.subtitle") }}</h3>
        <div class="content">
          <p v-for="(item, i) in $t('focus.paragraphs')" :key="i">{{ item }}</p>
        </div>
      </div>
      <div class="tabs">
        <ul>
          <li v-for="(item, i) in $t('focus.cates')" :key="i">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Focus"
};
</script>

<style lang="less">
.focus {
  .block-content {
    display: flex;
    @media all and (max-width: 768px) {
      display: block;
    }
    .panel {
      flex: 7;
      margin-right: 100px;
      @media all and (max-width: 768px) {
        margin-right: 0;
      }
      h3 {
        font-size: 28px;
        font-family: Helvetica;
        color: rgba(32, 172, 102, 1);
        line-height: 34px;
        margin-bottom: 34px;
        @media all and (max-width: 768px) {
          font-size: 18px;
        }
      }
      .content {
        p {
          margin-bottom: 20px;
        }
      }
    }
    .tabs {
      flex: 5;
      li {
        font-family: "ProximaNova";
        font-weight: bold;
        font-size: 22px;
        color: rgba(32, 172, 102, 1);
        line-height: 64px;
        border-bottom: 1px solid #d8d8d8;
        @media all and (max-width: 1320px) {
          font-size: 18px;
        }
        @media all and (max-width: 1120px) {
          font-size: 17px;
        }
        @media all and (max-width: 768px) {
          font-size: 14px;
          line-height: 40px;
        }
        &::before {
          content: "/";
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
