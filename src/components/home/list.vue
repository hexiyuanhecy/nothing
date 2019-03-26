<template>
  <div>
    <md-tabs md-sync-route>
      <!-- <md-tab id="tab-home" md-label="Home" to="/components/tabs/home"> -->
      <md-tab id="tab-home" md-label="Home">
      </md-tab>

      <!-- <md-tab id="tab-pages" md-label="Pages" to="/components/tabs/pages"> -->
      <md-tab id="tab-pages" md-label="Pages">
      </md-tab>

      <!-- <md-tab id="tab-posts" md-label="Posts" to="/components/tabs/posts"> -->
      <md-tab id="tab-posts" md-label="Posts">
      </md-tab>
      <!-- <md-tab id="tab-favorites" md-label="Favorites" to="/components/tabs/favorites"> -->
      <md-tab id="tab-favorites" md-label="Favorites">
        <!-- <md-menu md-size="medium" md-align-trigger>
            <md-button md-menu-trigger>Align with trigger</md-button>

            <md-menu-content>
                <md-menu-item>My Item 1</md-menu-item>
                <md-menu-item>My Item 2</md-menu-item>
                <md-menu-item>My Item 3</md-menu-item>
            </md-menu-content>
        </md-menu> -->
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
export default {
  name: 'TabContent'
}
</script>
