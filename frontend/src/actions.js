// thunk
export const fetchTask = () => {
  return dispatch => {
    fetch('http://localhost:3000/tasks').then(response => {
      return response.json();
    }).then(tasks => {
      dispatch({ type: 'set_tasks', tasks: tasks })
    })
  }
}
