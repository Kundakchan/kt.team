<template>
  <v-list two-line>
    <template v-for="(item, index) in items">
      <v-list-item :key="item.id">
        <template v-slot:default>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <div class="button__group grid">
              <v-btn @click="remove(item.id)" icon>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <v-btn @click="check(item.id)" icon>
                <v-icon v-show="item.status">mdi-checkbox-marked-circle-outline</v-icon>
                <v-icon v-show="!item.status">mdi-checkbox-blank-circle-outline</v-icon>
              </v-btn>
            </div>
          </v-list-item-action>
        </template>
      </v-list-item>
      <v-divider
        v-if="index + 1 < items.length"
        :key="index">
      </v-divider>
    </template>
  </v-list>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    items: Array
  },
  data () {
    return {}
  },
  methods: {
    ...mapActions([
      'TASK_REMOVE',
      'TASK_CHECK'
    ]),
    remove (id) {
      this.TASK_REMOVE(id)
    },
    check (id) {
      this.TASK_CHECK(id)
    }
  }
}
</script>

<style lang="scss" scoped>
.button__group {
  grid-template-columns: repeat(3, auto);
  column-gap: 20px;
}
</style>
