<template>
  <div class="product-pipe">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>产品中心</el-breadcrumb-item>
      <el-breadcrumb-item>管材系列</el-breadcrumb-item>
    </el-breadcrumb>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.id"
        :label="item.label"
        :value="item.id">
      </el-option>
    </el-select>
    <ul>
      <li v-for="item in product" :key="item.id">
        <div style="width:206px;">
          <div class="img-content">
            <img :src="require(`@/assets/img/${item.img}`)" alt="" width="206px">
          </div>
          <p>{{ item.title }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        id: 1,
        label: '角钢、镀锌角钢、不等边角钢'
      }, {
        id: 2,
        label: '槽钢、镀锌槽钢'
      }, {
        id: 3,
        label: '工字钢'
      }, {
        id: 4,
        label: 'H型钢'
      }],
      value: 1
    }
  },
  computed: {
    product () {
      let product
      switch (this.value) {
        case 1:
          product = [{
            id: 1,
            img: '201903191055532509518.jpg',
            title: '角钢 Angle ste'
          }]
          break
        case 2:
          product = [{
            id: 1,
            img: '201903191055244323403.jpg',
            title: '槽钢 Channel'
          }]
          break
        case 3:
          product = [{
            id: 1,
            img: '201903191055104468831.jpg',
            title: '工字钢 I-beam'
          }]
          break
        case 4:
          product = [{
            id: 1,
            img: '201903191054253094410.jpg',
            title: 'H 型钢 H secti'
          }]
          break
      }
      return product
    }
  }
}
</script>

<style scoped lang='scss'>
  .product-pipe {
    ul {
      display: flex;
      flex-wrap: wrap;
      margin-top: 30px;
      li {
        width: 33.33%;;
        box-sizing: border-box;
        padding-bottom: 20px;
        > div {
          cursor: pointer;
          .img-content {
            border: 1px solid #E6E7E7;
            padding: 4px;
            width: 206px;
            &:hover {
              background-color: #E6E7E7;
            }
          }
          p {
            text-align: center;
          }
        }
      }
    }
    .el-select {
      margin-top: 20px;
    }
  }

</style>
