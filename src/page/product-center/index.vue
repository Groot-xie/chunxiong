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
          ch: '产品中心',
          en: 'PRODUCT CENTER'
        },
        list: [
          {
            id: 1,
            title: '管材系列',
            path: '/product/pipe'
          }, {
            id: 2,
            title: '型材系列',
            path: '/product/section'
          }, {
            id: 3,
            title: '板材系列',
            path: '/product/board'
          }, {
            id: 4,
            title: '消防配件',
            path: '/product/firefighting'
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
    background: url('../../assets/img/banner3.png') no-repeat center;
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
