<template>
  <v-form @submit.prevent="add" class="control grid mt-5"
    lazy-validation>
    <v-text-field
      v-model="task"
      placeholder="Enter a title for this card..."
      filled
      rounded
      dense>
    </v-text-field>
    <v-btn
      type="submit"
      rounded
      color="primary"
      dark>
      add card
    </v-btn>
    <v-snackbar
      top
      v-model="snackbar">
      {{ message }}
      <v-btn
        color="red"
        text
        @click="snackbar = false">
        Ок
      </v-btn>
    </v-snackbar>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      task: '',
      snackbar: false,
      message: 'Нельзя добавить пустую форму'
    }
  },
  methods: {
    ...mapActions([
      'TASK_ADD'
    ]),
    add () {
      if (!this.task) this.warning()
      else {
        const id = Math.floor(Math.random() * 1e16).toString(16)
        this.TASK_ADD({ id: id, text: this.task, status: false, date: new Date() })
        this.task = ''
        this.$emit('taskAdd', true)
      }
    },
    warning () {
      this.snackbar = true
    }
  }
}
</script>

<style lang="scss" scoped>
.control {
  grid-template-columns: 1fr auto;
  column-gap: 2rem;
}
</style>
