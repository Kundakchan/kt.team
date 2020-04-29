<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="count">
    </v-pagination>
  </div>
</template>

<script>
export default {
  props: {
    count: Number
  },
  data () {
    return {
      page: 1
    }
  },
  watch: {
    page (newValue) {
      this.$emit('page', this.page - 1)
    }
  }
}
</script>
