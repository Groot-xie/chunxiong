<template>
  <div class="root">
    <div class="header">
      <div class="cx-container word">
        <span>{{ $t('welcome') }}</span>
        <span>{{ $t('language') }}:
          <el-button type="text" @click="changeLan('zh')">简体中文</el-button> |
          <el-button type="text" @click="changeLan('en')">ENGLISH</el-button>
        </span>
      </div>
    </div>
    <div class="middle">
      <div class="cx-container info" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeLan (lan) {
      this.$i18n.locale = lan
    }
  }
}
</script>

<style scoped lang='scss'>
  .header {
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    color: var(--font-base-color);
    background-color: #F49100;
    .word {
      display: flex;
      justify-content: space-between;
      .el-button {
        margin: 0;
        color: #fff;
      }
    }
  }

  .middle {
    height: 116px;
    background-color: #F0F0F0;
    .info {
      height: 116px;
      background: url('../../assets/img/info.jpg');
      background-size: cover;
    }
  }
</style>
