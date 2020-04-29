export default {
  // Сортерует список задачь от последнего к первому
  getTasks: state => {
    return state.tasks.sort((first, next) => {
      if (first.date > next.date) return -1
      else if (first.date < next.date) return 1
      else return 0
    })
  },
  // Разбивает задачи на страницы (количество записей на странице передается аргументом)
  TaskPage: (state) => count => {
    const result = []
    const page = Math.ceil(state.tasks.length / count)
    for (let i = 0; i < page; i++) {
      result.push(state.tasks.slice(i * count, count * (i + 1)))
    }
    return result
  }
}
