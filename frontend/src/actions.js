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

export const addTask = (name, hours) => {
  return dispatch => {
    fetch(targetUrl, {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        task: {
          name: name,
          hours: hours,
        },
      })
    }).then(response => {
      if (response.ok) {
        return response.json()
      }
    }).then(task => {
      dispatch({ type: 'add_task', task: task });
    })
  }
}
