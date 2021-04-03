const initialState = () => {
  let schedules = {};

  for (let i = 0; i < 18; i++) {
    schedules[i] = {name: null, selected: false};
  }

  return {
    tasks: {},
    schedules: schedules,
  }
};

export default (state = initialState(), action) => {
  switch (action.type) {
    case 'set_tasks':
      return {
        tasks: {
          ...state.tasks,
          ...action.tasks,
        },
        schedules: {...state.schedules},
      }
    case 'add_task':
      return {
        tasks: {
          ...state.tasks,
          [state.task.length]: action.task,
        },
        schedules: {...state.schedules},
      }
    case 'turn_on_selected_hours':
      return {
        tasks: {...state.tasks},
        schedules: {
          ...state.schedules,
          [action.index]: {
            name: state.schedules[action.index].name,
            selected: true,
          },
        },
      }
    case 'turn_off_selected':
      return {
        tasks: {...state.tasks},
        schedules: {
          ...state.schedules,
          [action.index]: {
            name: state.schedules[action.index].name,
            selected: false,
          },
        },
      }
    case 'assign_task':
      const selectedSchedules = {};
      Object.keys(state.schedules).filter((key) => state.schedules[key].selected).forEach((skey) => {
        selectedSchedules[skey] = {
          name: action.task.name,
          selected: false
        };
      })
      return {
        tasks: {
          ...state.tasks,
          [action.task.index]: {
            name: action.task.name,
            hours: action.task.hours - Object.keys(selectedSchedules).length
          }
        },
        schedules: {
          ...state.schedules,
          ...selectedSchedules,
        },
      }
    default:
      return state;
  }
};
