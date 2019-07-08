<template>
  <div>
    <el-carousel height="560px">
      <el-carousel-item v-for="item in banners" :key="item">
        <img :src="require(`../assets/img/${item}`)">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      banners: ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
    }
  },
  methods: {

  }
}
</script>

<style scoped lang='scss'>

</style>
