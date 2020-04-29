export default {
  // Загружает данные при запуске приложения
  async LOADER ({ commit }) {
    try {
      const loader = require('@/assets/TodoList.json')
      commit('setTasks', loader)
    } catch (error) {
      console.error(error.message)
      throw error
    }
  },
  // Добавляет новую задачу
  async TASK_ADD ({ commit }, payload) {
    try {
      commit('taskAdd', payload)
    } catch (error) {
      console.error(error.message)
      throw error
    }
  },
  // Удаляет задачу
  async TASK_REMOVE ({ commit }, payload) {
    try {
      commit('taskRemove', payload)
    } catch (error) {
      console.error(error.message)
      throw error
    }
  },
  // Отмечает задачу как выполненую
  async TASK_CHECK ({ commit }, payload) {
    try {
      commit('taskCheck', payload)
    } catch (error) {
      console.error(error.message)
      throw error
    }
  }
}
