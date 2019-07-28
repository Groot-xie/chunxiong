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
          ch: '关于纯雄',
          en: 'ABOUT CHUNXIONG'
        },
        list: [
          {
            id: 1,
            title: '公司简介',
            path: '/about/about-us'
          },
          {
            id: 2,
            title: '企业文化',
            path: '/about/culture'
          }
        ],
        img: '246c8879_6aa6_490e_a268_9e92cc4bb628.jpg'
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
    background: url('../../assets/img/banner1.png') no-repeat center;
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
