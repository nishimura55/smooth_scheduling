const initialState = {
  tasks: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'set_tasks':
      return {
        tasks: [
          ...state.tasks,
          ...action.tasks,
        ]
      }
    case 'add_task':
      return {
        tasks: [
          ...state.tasks,
          action.task,
        ]
      }
    default:
      return state;
  }
};
