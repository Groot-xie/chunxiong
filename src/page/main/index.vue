<template>
  <div>
    <!-- 轮播图 -->
    <div class="carousel">
      <el-carousel :height="imgHeight">
        <el-carousel-item v-for="item in banners" :key="item">
          <img ref="carousel_img" :src="require(`@/assets/img/${item}`)">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 产品中心 -->
    <div class="product-center">
      <div class="cx-container">
        <div class="title">产品中心</div>
        <div class="line">
          <div class="word">Product Center</div>
        </div>
        <!-- 产品导航 -->
        <ul class="nav">
          <li @click="type = 'tubular'" :class="{active: type === 'tubular'}">管材系列</li>
          <li @click="type = 'section'" :class="{active: type === 'section'}">型材系列</li>
          <li @click="type = 'board'" :class="{active: type === 'board'}">板材系列</li>
          <li @click="type = 'firefighting'" :class="{active: type === 'firefighting'}">消防系列</li>
        </ul>
        <!-- 产品 -->
        <ul class="product">
          <li v-for="(item, index) in product.list" :key="index">
            <div class="img-box">
              <div class="img-box-inner">
                <img :src="require(`@/assets/img/${item.img}`)" alt="">
              </div>
            </div>
            <p>{{ item.description }}</p>
            <el-button size="small">查看</el-button>
          </li>
        </ul>
      </div>
    </div>
    <!-- 其他 -->
    <div class="other">
      <div class="cx-container other-content">
        <div class="left">
          <div class="about-us">
            公司简介
            <i>about us</i>
            <div class="line-one"></div>
          </div>
          <div class="introduction">
            <p>赣州金东钢材有限公司始建于 2007 年 4 月，位于赣州市客家大道钢材市场中街 1 号，并于 2016 年在赣州毅德城物流园设立了新的经营部和 3000 平米的大型仓库。</p>
          </div>
          <div class="contact-us">
            <div class="left-side">
              <p>联系我们</p>
              <p>CONTACT US</p>
            </div>
            <div class="right-side">13601668579</div>
          </div>
        </div>
        <div class="middle"></div>
        <div class="right">
          <div class="top">
            <div class="news">
              行业新闻
              <i>Q&A</i>
              <div class="line-one"></div>
            </div>
            <div class="more">更多>>></div>
          </div>
          <ul>
            <li>
              <p><i class="el-icon-chat-dot-round" />钢铁领跌商品期货 动力煤逆势</p>
              <p><i class="el-icon-user-solid "/>网易财经5月19日讯 商品期货现在普遍走低。其中，铁矿石跌2...</p>
            </li>
            <li>
              <p><i class="el-icon-chat-dot-round" />中国钢材价格近期会继续上涨吗</p>
              <p><i class="el-icon-user-solid "/>近期铁矿石期货价格企稳反向弹，螺纹钢期货价格也止跌盘整。分析...</p>
            </li>
            <li>
              <p><i class="el-icon-chat-dot-round" />2018年建材行业运行情况</p>
              <p><i class="el-icon-user-solid "/>2018年，全国水泥产量217667万吨，比上年增长百分之3...</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      banners: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
      imgHeight: '560px',
      type: 'tubular',
      products: [{
        type: 'tubular',
        list: [{
          img: '201903191052534410876.jpg',
          description: '镀锌管DN250'
        }, {
          img: '201903191053383141478.jpg',
          description: '无缝管'
        }, {
          img: '201903191053388555971.jpg',
          description: '焊管'
        }, {
          img: '201903191053371081794.jpg',
          description: '扁管'
        }]
      }, {
        type: 'section',
        list: [{
          img: '201903191054253094410.jpg',
          description: 'H 型钢 H section steel'
        }, {
          img: '201903191055104468831.jpg',
          description: '工字钢 I-beam'
        }, {
          img: '201903191055104468831.jpg',
          description: '工字钢 I-beam'
        }, {
          img: '201903191055244323403.jpg',
          description: '槽钢 Channel'
        }]
      }, {
        type: 'board',
        list: [{
          img: '201903191056517438857.jpg',
          description: '钢板'
        }, {
          img: '201903191024044759341.jpg',
          description: '卷板'
        }, {
          img: '201903191058423861330.jpg',
          description: '薄板'
        }, {
          img: '201903191058297829105.jpg',
          description: '花纹板'
        }]
      }, {
        type: 'firefighting',
        list: [{
          img: '201903191035095237109.jpg',
          description: '消防配件 - 水厂专用系列'
        }, {
          img: '201903191035091570727.jpg',
          description: '消防配件 - 机械阀门系列'
        }, {
          img: '201903191035088781542.jpg',
          description: '消防配件 - 沟槽系列'
        }, {
          img: '201903191035085650951.jpg',
          description: '消防配件 - 给水消防系列'
        }]
      }]
    }
  },
  computed: {
    product () {
      return this.products.filter(item => item.type === this.type)[0]
    }
  },
  methods: {

  },
  mounted () {
    this.$refs.carousel_img[0].onload = () => {
      this.imgHeight = this.$refs.carousel_img[0].height + 'px'
    }
  }
}
</script>

<style scoped lang='scss'>
  .carousel {
    img {
      width: 100%;
    }
  }
  .product-center {
    height: 576px;
    background-color: #2D2E32;
    .title {
      text-align: center;
      color: #fff;
      font-size: 20px;
      padding: 40px 0 20px 0;
    }
    .line {
      border-top: 1px solid #444547;
      position: relative;
      .word {
        position: absolute;
        top: -10px;
        right: 0;
        left: 0;
        margin: 0 auto;
        width: 20%;
        text-align: center;
        color: #DBDBDB;
        background-color: #2D2E32;
      }
    }
    .nav {
      padding: 20px 0;
      list-style: none;
      display: flex;
      li {
        padding-right: 60px;
        cursor: pointer;
        color: #D1D1D1;
        &.active {
          color: red;
        }
      }
    }
    .product {
      display: flex;
      list-style: none;
      li {
        background-color: #fff;
        width: 218px;
        padding: 10px;
        margin: 0 15px;
        cursor: pointer;

        .img-box {
          margin: 0 auto;
          padding: 4px;
          height: 200px;
          background-color: #CCCCCC;
          .img-box-inner, img {
            width: 100%;
            height: 100%;
            overflow: hidden;
            transition: all .8s;
          }
        }
        p {
          padding: 20px 0;
        }
        &:hover {
          background-color: #BB0000;
          p {
            color: #fff;
          }
          .img-box {
            background-color: #fff;
            img {
              transform: scale(1.2);
            }
          }
        }
      }
    }
  }
  .other {
    .other-content {
      display: flex;
      .about-us,
      .news {
        position: relative;
        display: inline-block;
        padding: 20px 0;
        border-bottom: 4px solid #000;
        font-size: 16px;
        i {
          color: #757575;
          font-size: 12px;
        }
        .line-one {
          position: absolute;
          bottom: -4px;
          width: 30px;
          border-bottom: 4px solid #BB0000;
        }
      }
      .left {
        flex: 4;
        .introduction {
          border-top: 2px solid #CCCCCC;
          padding: 20px 0 20px 155px;
          margin-top: -1px;
          height: 180px;
          font-size: 13px;
          background: url('../../assets/img/suppbg.jpg') no-repeat;
          background-size: contain;
          p {
            text-indent: 2em;
            line-height: 1.4em;
          }
        }
        .contact-us {
          display: flex;
          height: 80px;
          color: #fff;
          text-align: center;
          .left-side {
            position: relative;
            padding: 20px 0;
            flex: 3;
            background-color: #BB0000;
            p:last-child {
              font-size: 12px;
            }
            &::after {
              content: '';
              position: absolute;
              right: -20px;
              top: 50%;
              transform: translateY(-50%);
              border: 10px solid;
              border-color: transparent;
              border-left-color: #BB0000;
              width: 0px;
              height: 0px;
            }
          }
          .right-side {
            flex: 7;
            line-height: 80px;
            font-size: 30px;
            background-color: #2D2E32;
          }
        }
      }
      .right {
        flex: 6;
        ul {
          list-style: none;
          border-top: 2px solid #CCCCCC;
          margin-top: -1px;
          font-size: 14px;
          li {
            &:hover {
              p:first-child {
                color: #BB0000;
              }
            }
            cursor: pointer;
            padding: 20px 0;
            border-bottom: 1px dashed #CCCCCC;
            i {
              margin-right: 10px;
            }
            p:first-child {
              margin-bottom: 10px;
              &:hover {
                color: #BB0000;
              }
            }
            p:nth-child(2) {
              color: #666;
            }
          }
        }
      }
      .top {
        display: flex;
        justify-content: space-between;
        .more {
          cursor: pointer;
          padding: 20px 0;
          font-size: 12px;
          color: #666666;
        }
      }
      .middle {
        flex: 0.7;
      }
    }
  }
</style>
