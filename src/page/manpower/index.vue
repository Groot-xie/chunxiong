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
          ch: '人力资源',
          en: 'HUMAN RESOURCES'
        },
        list: [
          {
            id: 1,
            title: '招聘制度',
            path: '/manpower/recruitment'
          }, {
            id: 2,
            title: '培训体系',
            path: '/manpower/training-system'
          }, {
            id: 3,
            title: '招贤纳士',
            path: '/manpower/join-us'
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
    background: url('../../assets/img/banner5.png') no-repeat center;
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
