<template>
  <div class="footer">
    <div class="orange"></div>
    <div class="main">
      <div class="cx-container" style="display: flex; justify-content: space-between;">
        <div class="info">
          <p>{{ $t('address.key') }}：{{ $t('address.value') }} &nbsp; {{ $t('tel') }}：13601668579</p>
          <p>{{ $t('e-mail') }}： 13601668579@139.com  &nbsp; {{ $t('postcode') }}：201600</p>
          <p>{{ $t('copyright.key') }}：{{ $t('copyright.value') }} &nbsp; 沪ICP备19027133号-1</p>
        </div>
        <div class="erweima">
          <img src="../../assets/img/erweima.jpg" alt="" width="116">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
  .footer {
    .orange {
      height: 5px;
      background-color: #F49100;
    }
    .main {
      height: 160px;
      background-color: #272822;
      padding: 18px 0 0 0;
      .info {
        font-size: 14px;
        font-family: "微软雅黑", Arial;
        color: #B8B7B7;
        flex: 7;
        p {
          line-height: 24px;
          &:last-child {
            margin-top: 50px;
          }
        }
      }
      .erweima {
        flex: 4;
        border-left: 1px dashed #6C6A6B;
        img {
          margin-left: 50px;
        }
      }
    }
  }
</style>
