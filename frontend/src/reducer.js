const initialState = () => {
  let schedules = [];

  for (let i = 0; i < 18; i++) {
    schedules.push({task: null, selected: false});
  }

  return {
    tasks: [],
    schedules: schedules,
  }
};

export default (state = initialState(), action) => {
  switch (action.type) {
    case 'set_tasks':
      return {
        tasks: [
          ...state.tasks,
          ...action.tasks,
        ],
        schedules: [...state.schedules],
      }
    case 'add_task':
      return {
        tasks: [
          ...state.tasks,
          action.task,
        ],
        schedules: [...state.schedules],
      }
    case 'turn_on_selected_hours':
      state.schedules[action.index].selected = true;
      return {
        tasks: [...state.tasks],
        schedules: [...state.schedules],
      }
    case 'turn_off_selected':
      state.schedules[action.index].selected = false;
      return {
        tasks: [...state.tasks],
        schedules: [...state.schedules],
      }
    case 'assign_task':
      const selectedSchedules = state.schedules.filter((s) => s.selected)
      selectedSchedules.forEach((s) => {
        s.task = action.name;
      })
      state.tasks.find((t) => t[0] == action.name)[1] -= selectedSchedules.length;
      return {
        tasks: [...state.tasks],
        schedules: [...state.schedules],
      }
    default:
      return state;
  }
};
