const targetUrl = 'http://localhost:3000/tasks';

// thunk
export const fetchTasks = () => {
  return dispatch => {
    fetch(targetUrl).then(response => {
      return response.json();
    }).then(tasks => {
      dispatch({ type: 'set_tasks', tasks: tasks })
    })
  }
}

export const addTask = (name) => {
  return dispatch => {
    fetch(targetUrl, {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        task: {
          name: name
        },
      })
    }).then(response => {
      if (response.ok) {
        return response.json()
      }
    }).then(task => {
      console.log(task)
      dispatch({ type: 'add_task', task_name: task.name });
    })
  }
}
