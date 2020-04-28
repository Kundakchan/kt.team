<template>
  <div id="app" class="app grid max-width max-height">
    <header class="header padding-gap">
      <app-header/>
    </header>
    <main class="main padding-gap">
      <router-view/>
    </main>
  </div>
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
  grid-column: 2 / 12;
  grid-row: 1 / 2;
}
.main {
  grid-column: 2 / 12;
  grid-row: 2 / 3;
}
@media screen and (max-width: 700px) {
  .header, .main {
    grid-column: 1 / -1;
  }
}
</style>
