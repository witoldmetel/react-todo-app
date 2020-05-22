export default function tasks(state = [], action) {
  switch (action.type) {
    case 'GET_TASKS':
      return action.payload;

    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          randomFace: Math.random(),
          title: action.payload,
          status: false,
        },
      ];

    case 'EDIT_TASK':
      return state.map((task) => (task.id === action.id ? { ...task, title: action.payload } : task));

    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload);

    case 'TOGGLE_TASK':
      return state.map((task) => (task.id === action.payload ? { ...task, status: !task.status } : task));
  }

  return state;
}