<template>
  <section class="home container grid max-height">
    <div class="header">
      <control @taskAdd="pageItem = 0"/>
    </div>
    <div class="body">
      <list :items="List"/>
    </div>
    <div class="footer">
      <pagination :count="page" :page="pageItem" @page="newPage($event)"/>
    </div>
  </section>
</template>

<script>
import Pagination from '@/components/Pagination'
import Control from '@/components/Control'
import List from '@/components/List'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      pageItem: 0
    }
  },
  components: {
    Control,
    Pagination,
    List
  },
  computed: {
    ...mapGetters([
      'TaskPage'
    ]),
    page () {
      return this.TaskPage(10).length
    },
    List () {
      return this.TaskPage(10)[this.pageItem]
    }
  },
  methods: {
    newPage (event) {
      this.pageItem = event
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  grid-template-rows: auto 1fr auto;
}
</style>
