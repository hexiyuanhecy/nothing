<template>
  <swiper :options="swiperOption">
    <!-- <swiper-slide><img src="@/assets/images/coffee1.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/images/coffee1.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/images/coffee1.jpg" alt=""></swiper-slide> -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'Swiper',
  date () {
    return {
      swiperOption: {}
    }
  }
}
</script>

<style lang='stylus' scoped>
</style>
