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
        label: '系列玛钢件'
      }, {
        id: 2,
        label: '给水消防系列'
      }, {
        id: 3,
        label: '阀门消防系列'
      }, {
        id: 4,
        label: '水厂专用系列'
      }, {
        id: 5,
        label: '沟槽系列'
      }],
      value: 1
    }
  },
  computed: {
    product () {
      let product = []
      switch (this.value) {
        case 1:
          product = [{
            id: 1,
            img: '201903191035084002210.jpg',
            title: '消防配件 - 系列玛钢件'
          }]
          break
        case 2:
          product = [{
            id: 1,
            img: '201903191035085650951.jpg',
            title: '消防配件 - 给水消防系'
          }]
          break
        case 3:
          product = [{
            id: 1,
            img: '201903191035091570727.jpg',
            title: '消防配件 - 机械阀门系'
          }, {
            id: 2,
            img: '201903191035081246663.jpg',
            title: '消防配件 - 阀门系列'
          }]
          break
        case 4:
          product = [{
            id: 1,
            img: '201903191035095237109.jpg',
            title: '消防配件 - 水厂专用系'
          }]
          break
        case 5:
          product = [{
            id: 1,
            img: '201903191035088781542.jpg',
            title: '消防配件 - 沟槽系列'
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
