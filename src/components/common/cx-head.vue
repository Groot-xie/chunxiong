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
      <div class="cx-container info" >
        <div class="left">
          <img src="../../assets/img/logo.jpg" width="60">
          <div class="word">
            <p>上海纯雄实业有限公司</p>
            <p>SHANGHAI CHUNXIONG STEEL CO., LTD</p>
          </div>
        </div>
        <div class="right">
          <i class="el-icon-phone-outline"></i>
          <div>
            <p>{{ $t("sales") }}</p>
            <span>13601668579</span>
          </div>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="cx-container">
        <ul>
          <li v-for="(o, i) in menu" :key="i" @click="go(o)">{{ $t(o.label) }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: [{
        label: 'home',
        path: '/'
      }, {
        label: 'about',
        path: '/about'
      }, {
        label: 'resources',
        path: '/resource'
      }, {
        label: 'product',
        path: '/product'
      }, {
        label: 'news'
      }, {
        label: 'service',
        path: '/service'
      }, {
        label: 'manpower',
        path: '/manpower'
      }, {
        label: 'message'
      }, {
        label: 'contact',
        path: '/contact'
      }]
    }
  },
  methods: {
    changeLan (lan) {
      this.$i18n.locale = lan
    },
    go (o) {
      o.path
        ? this.$router.push(o.path)
        : this.$message.error(this.$i18n.locale === 'zh'
          ? '维护中,请谅解！'
          : 'Under maintenance, please understand!'
        )
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
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .word {
          margin-left: 10px;
          p:first-child {
            font-weight: bold;
            font-family:'华文琥珀', 'Arial Narrow', Arial, sans-serif;
            font-size: 26px;
          }
        }
      }
      .right {
        display: flex;
        align-items: center;
        > div {
          margin-left: 10px;
          p {
            font-size: 12px;
          }
        }
        i {
          padding: 10px;
          border-radius: 50%;
          font-size: 30px;
          background-color: orange;
          color: #fff;
        }
        span {
          font-size: 20px;
          font-weight: 700;
          color: orange;
        }
      }
    }
  }

  .nav {
    display: flex;
    align-items: center;
    height: 42px;
    background-color: #E5E5E5;
    border-top: 1px solid #fff;
    ul {
      display: flex;
      list-style: none;
      li {
        height: 43px;
        padding: 0 22px;
        line-height: 43px;
        color: #666;
        font-size: 15px;
        font-weight: 700;
        cursor: pointer;
        &:hover {
          color: #fff;
          background-color: orange;
        }
      }
    }
  }
</style>
