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
          ch: '联系我们',
          en: 'CONTACT US'
        },
        list: [
          {
            id: 1,
            title: '联系我们',
            path: '/contact/contact-us'
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
    background: url('../../assets/img/banner6.png') no-repeat center;
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
