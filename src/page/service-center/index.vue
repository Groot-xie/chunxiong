<template>
  <div class="about">
    <div class="banner" />
    <div class="main">
      <div class="cx-container">
        <div class="left">
          <aside-nav v-bind="asideData" />
        </div>
        <div class="right">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AsideNav from '@/components/aside-nav.vue'
export default {
  data () {
    return {
      asideData: {
        title: {
          ch: '纯雄服务',
          en: 'CHUNXIONG SERVICE'
        },
        list: [
          {
            id: 1,
            title: '仓储物流',
            path: '/service/warehouse-logistics'
          }, {
            id: 2,
            title: '加工中心',
            path: '/service/machining-center'
          }, {
            id: 3,
            title: '服务承诺',
            path: '/service/service-promise'
          }, {
            id: 4,
            title: '客户服务',
            path: '/service/customer-service'
          }
        ]
      }
    }
  },
  components: {
    AsideNav
  }
}
</script>

<style scoped lang='scss'>
  .banner {
    height: 200px;
    background: url('../../assets/img/banner4.png') no-repeat center;
    background-size: cover;
  }
  .main {
    padding-top: 50px;
    background-color: #F3F3F3;
    .cx-container {
      display: flex;
      .left {
        width: 220px;
      }
      .right {
        flex: 1;
        padding-left: 30px;
      }
    }
  }
</style>
<style lang="scss">
  .content {
    font-size: 14px;
    padding: 30px 20px;
    text-indent: 2em;
    color: #666;
    line-height: 26px;
    word-spacing: 1px;
  }
</style>
