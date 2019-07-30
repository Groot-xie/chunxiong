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
        label: '钢板'
      }, {
        id: 2,
        label: '花纹板'
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
            img: '201903191056517438857.jpg',
            title: '钢板'
          }, {
            id: 2,
            img: '201903191024044759341.jpg',
            title: '卷板'
          }, {
            id: 3,
            img: '201903191058423861330.jpg',
            title: '薄板'
          }]
          break
        case 2:
          product = [{
            id: 1,
            img: '201903191058297829105.jpg',
            title: '花纹板'
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
