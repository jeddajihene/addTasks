import {
  ADD_TASK,
  DELETE_TASK,
  CHECK_TASK,
  EDIT_TASK,
} from "../actionTypes/Task";

const initialState = {
  tasks: [
    {
      id: Math.random(),
      text: "Task1",
      done: false,
    },
    {
      id: Math.random(),
      text: "Task2",
      done: false,
    },
    {
      id: Math.random(),
      text: "Task3",
      done: false,
    },
  ],
  isAuth: false,
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload] };
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter((el) => el.id !== payload) };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload.id ? { ...task, text: payload.newText } : task
        ),
      };
    case CHECK_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload ? { ...task, done: !task.done } : task
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
