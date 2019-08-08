<template>
  <div class="aside-nav">
    <div class="title">
      <p class="f">{{ title.ch }}</p>
      <p class="s">{{ title.en }}</p>
      <div class="triangle" />
    </div>
    <ul class="list">
      <li :class="{active: $route.path === item.path}" v-for="item in list" @click="goPage(item)" :key="item.id">{{ item.title }}</li>
    </ul>
    <img :src="require('@/assets/img/246c8879_6aa6_490e_a268_9e92cc4bb628.jpg')" width="100%">
    <div class="desc">
      <p>地址：上海市松江钢材城E109</p>
      <p>电话：13601668579</p>
      <p>邮箱: 13601668579@139.com</p>
      <p>邮编：201600</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: Object,
    list: Array
  },
  methods: {
    goPage (item) {
      if (item.path) {
        this.$router.push(item.path)
      } else {
        this.$message.error('敬请期待！')
      }
    }
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>

<style scoped lang='scss'>
  .aside-nav {
    height: 100%;
    background-color: #fff;
  }
  .title {
    position: relative;
    box-sizing: border-box;
    padding: 30px 0 0 25px;
    height: 114px;
    color: #fff;
    background-color: #F29200;
    .f {
      font-size: 22px;
    }
    .triangle {
      position: absolute;
      top: 0;
      right: 0;
      border-top: 25px solid #EA6200;
      border-bottom: 25px solid transparent;
      border-left: 85px solid transparent;
      border-right: 85px solid #EA6200;
    }
  }
  .list {
    padding: 0 10px 10px 10px;
    li {
      cursor: pointer;
      position: relative;
      padding-left: 30px;
      height: 32px;
      line-height: 32px;
      font-size: 14px;
      border-bottom: 1px solid #ccc;
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        background-color: #F29200;
      }
      &:hover {
        color: #F29200;
      }
      &.active {
        color: #F29200;
      }
    }
  }
  .desc {
    padding: 0 5px;
    color: #666666;
    font-size: 14px;
    line-height: 28px;
  }
</style>
