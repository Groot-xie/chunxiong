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
        label: '热镀锌管'
      }, {
        id: 2,
        label: '无缝钢管'
      }, {
        id: 3,
        label: '焊接钢管'
      }, {
        id: 4,
        label: '方扁管/镀锌方扁管'
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
            img: '201903191052534410876.jpg',
            title: '镀锌管DN250'
          }, {
            id: 2,
            img: '201903191052532936233.jpg',
            title: '镀锌管DN200'
          }, {
            id: 3,
            img: '201903191052531121568.jpg',
            title: '镀锌管DN150'
          }, {
            id: 4,
            img: '201903191052539096897.jpg',
            title: '镀锌管DN125'
          }, {
            id: 5,
            img: '201903191052539923931.jpg',
            title: '镀锌管DN100'
          }, {
            id: 6,
            img: '201903191052535546858.jpg',
            title: '镀锌管DN80'
          }, {
            id: 7,
            img: '201903191052538635157.jpg',
            title: '镀锌管DN65'
          }, {
            id: 8,
            img: '201903191052526829593.jpg',
            title: '镀锌管DN50'
          }, {
            id: 9,
            img: '201903191052526006724.jpg',
            title: '镀锌管DN40'
          }, {
            id: 10,
            img: '201903191052522523535.jpg',
            title: '镀锌管DN32'
          }, {
            id: 11,
            img: '201903191052523764647.jpg',
            title: '镀锌管DN25'
          }, {
            id: 12,
            img: '201903191052522139226.jpg',
            title: '镀锌管DN20'
          }, {
            id: 13,
            img: '201903191052526442554.jpg',
            title: '镀锌管DN15'
          }]
          break
        case 2:
          product = [{
            id: 1,
            img: '201903191053383141478.jpg',
            title: '无缝管'
          }, {
            id: 2,
            img: '201903190958536844576.jpg',
            title: '无缝钢管'
          }]
          break
        case 3:
          product = [{
            id: 1,
            img: '201903191053388555971.jpg',
            title: '焊管'
          }, {
            id: 2,
            img: '201903191000569034536.jpg',
            title: '焊接钢管'
          }]
          break
        case 4:
          product = [{
            id: 1,
            img: '201903191053371081794.jpg',
            title: '扁管'
          }, {
            id: 2,
            img: '201903191056072739091.jpg',
            title: '镀锌方管'
          }, {
            id: 3,
            img: '201903191005476906592.jpg',
            title: '方矩管'
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
