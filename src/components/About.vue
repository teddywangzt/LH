<template>
  <div class="about">
    <h2 class="block-title">{{ $t("about.title") }}</h2>
    <p v-for="(item, i) in $t('about.paragraphs')" :key="i">{{ item }}</p>
    <div class="card-list">
      <div class="item" v-for="(item, index) in $t('about.cates')" :key="index">
        <div class="action">{{ item.do }}</div>
        <div class="amount">{{ item.howmany }}</div>
        <div class="type">{{ item.what }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="less">
.about {
  p {
    margin-bottom: 50px;
  }
  .card-list {
    margin: 0 -20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      font-family: "ProximaNovaBold";
      flex: 1;
      margin: 20px;
      @media all and (max-width: 1100px) {
        margin: 16px;
      }
      padding: 20px;
      height: 204px;
      background: rgba(235, 242, 239, 1);
      .action {
        font-family: "ProximaNova";
        height: 27px;
        font-size: 22px;
        color: rgba(39, 39, 39, 1);
        line-height: 26px;
      }
      .amount {
        height: 72px;
        font-size: 60px;
        color: rgba(32, 172, 102, 1);
        line-height: 72px;
        white-space: nowrap;
        margin: 15px 0;
      }
      .type {
        height: 32px;
        font-size: 26px;
        line-height: 31px;
        white-space: nowrap;
      }
      @media all and (max-width: 768px) {
        height: 120px;
        padding: 15px;
        margin: 8px;
        min-width: 160px;
        .action {
          font-size: 14px;
        }
        .amount {
          font-size: 28px;
          line-height: 34px;
          height: 34px;
          margin: 7px 0 4px;
        }
        .type {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
