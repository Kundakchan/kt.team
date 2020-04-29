export default {
  setTasks (state, payload) {
    state.tasks = payload
  },
  taskAdd (state, payload) {
    state.tasks.unshift(payload)
  },
  taskRemove (state, payload) {
    const index = state.tasks.findIndex(item => item.id === payload)
    state.tasks.splice(index, 1)
  },
  taskCheck (state, payload) {
    state.tasks.forEach(item => {
      if (item.id === payload) item.status = !item.status
    })
  }
}
