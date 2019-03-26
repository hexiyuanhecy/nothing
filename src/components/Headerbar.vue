<template>
  <div class="page-container md-elevation-1">
    <md-app md-mode="reveal" class="headerbar md-elevation-1">
      <md-app-toolbar class="">
        <md-button class="md-icon-button">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title ">浙江理工大学</span>
        <md-button class="md-icon-button">
          <md-icon>more_vert</md-icon>
        </md-button>
      </md-app-toolbar>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar'
}
</script>

<style lang='stylus' scoped>
.md-title
  color :black
  font-size : 14px
  margin-left : 6px
</style>
