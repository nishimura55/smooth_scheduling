const initialState = {
  tasks: [
    {
      id: 0,
      name: "始めのタスク"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'set_tasks':
      return {
        tasks: [
          ...state.tasks,
          ...action.tasks
        ]
      }
    default:
      return state;
  }
};
