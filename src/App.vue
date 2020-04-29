<template>
  <v-app>
    <div id="app" class="app grid max-width max-height">
      <header class="header">
        <app-header/>
      </header>
      <main class="main">
        <router-view/>
      </main>
    </div>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader'
export default {
  components: {
    'app-header': AppHeader
  }
}
</script>

<style lang="scss">
.app {
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 1fr;
}
.header {
  grid-column: 1 / -1;
  grid-row: 1 / 2;
}
.main {
  grid-column: 3 / 11;
  grid-row: 2 / 3;
}
@media screen and (max-width: 700px) {
  .main {
    grid-column: 1 / -1;
  }
}
</style>
