<template>
  <div class="">
    <header-bar></header-bar>
    <router-view></router-view>
    <tab class="tab"></tab>
    <!-- <talion-view v-show="talion" @closeTalion="close"></talion-view> -->
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar'
import Tab from '../components/Tab'
// import Search from '../views/Search'

export default {
  name: 'pages-view',
  components: { HeaderBar, Tab },
  data () {
    return {
      talion: ''
    }
  },
  methods: {
    // open: function () {
    //   this.talion = 'open'
    // },
    // close: function () {
    //   this.talion = ''
    // }
  }
}
</script>

<style scoped>
.tab{
  position: fixed;
  width: 100%;
  background: white;
  bottom: 0;
}
</style>
