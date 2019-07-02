<template>
  <div class="home">
    <cx-head />
    <router-view />
    <cx-foot />
  </div>
</template>

<script>
import cxHead from '@/components/common/cx-head.vue'
import cxFoot from '@/components/common/cx-foot.vue'
export default {
  name: 'home',
  components: {
    cxHead,
    cxFoot
  }
}
</script>
