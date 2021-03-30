const initialState = {
  tasks: [],
  schedules: Array(18).fill(null),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'set_tasks':
      return {
        tasks: [
          ...state.tasks,
          ...action.tasks,
        ],
        schedules: state.schedules,
      }
    case 'add_task':
      return {
        tasks: [
          ...state.tasks,
          action.task,
        ],
        schedules: state.schedules,
      }
    default:
      return state;
  }
};
