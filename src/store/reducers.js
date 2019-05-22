import {createAction, handleActions} from "redux-actions";
import {omit} from "../data/helpers";

const initialState = {
  tasks: {},
  status: {
    editTaskId: false,
    priorityFilter: false
  }
};

const addTask = createAction('ADD_TASK');
const editTask = createAction('EDIT_TASK');
const saveTask = createAction('SAVE_TASK');
const deleteTask = createAction('DELETE_TASK');
const priorityFilter = createAction('PRIORITY_FILTER');
const finishTask = createAction('FINISH_TASK');

export {addTask, editTask, saveTask, deleteTask, priorityFilter, finishTask};

export const reducer = handleActions(
  {
    EDIT_TASK: (state, action) =>  ({
      ...state,
      status: {
        ...state.status,
        editTaskId: action.payload
      }
    }),

    SAVE_TASK: (state, action) => {
      let newTasks = {
        ...state.tasks,
        [action.payload.id]: action.payload
      };
      return {
        ...state,
        tasks: newTasks,
        status: {
          ...state.status,
          editTaskId: false
        }
      }
    },

    DELETE_TASK: (state, action) => {
      let newTasks = omit(action.payload, state.tasks);
      return {
        ...state,
        tasks: newTasks,
        status: {
          ...state.status,
          editTaskId: false
        }
      }
    },

    ADD_TASK: (state, action) => {
      let newTasks = {
        ...state.tasks,
        [action.payload.id]: action.payload
      };
      return {
        ...state,
        tasks: newTasks,
        status: {
          ...state.status,
          editTaskId: action.payload.id
        }
      }
    },

    PRIORITY_FILTER: (state, action) => {
      return {
        ...state,
        status: {
          ...state.status,
          priorityFilter: action.payload,
          editTaskId: false
        }
      }
    },

    FINISH_TASK: (state, action) => {
      let newTasks = {
        ...state.tasks,
        [action.payload]: {
          ...state.tasks[action.payload],
          completed: true,
          completedDate: new Date().toISOString().slice(0,16),
        }
      };
      return {
        ...state,
        tasks: newTasks,
        status: {
          ...state.status,
          editTaskId: false
        }
      }
    }
  },
  initialState
);