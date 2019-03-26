<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-content class="md-scrollbar">
        <homelist></homelist>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Homelist from '@/components/home/Homelist'
import List from '@/components/home/list'
export default {
  name: 'Home',
  components: { Homelist, List },
  data: () => ({
    // menuVisible: false
  })
}
</script>

<style scoped>
.md-app {
    max-height: 600px;
  }

  .md-drawer {
    width: 230px;
    background: white;
    max-width: calc(100vw - 200px);
  }

.toolbar{
  background: white;
}
</style>
