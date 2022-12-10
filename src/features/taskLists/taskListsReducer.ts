import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

type Task = {
  description: string;
  time: string;
  id: string;
  completed: false;
};

type TaskList = {
  id: string;
  name: string;
  tasks: Task[];
};

const initialState: { taskLists: TaskList[] } = {
  taskLists: [
    { id: uuid(), name: "Gym", tasks: [] },
    { id: uuid(), name: "Work", tasks: [] },
    { id: uuid(), name: "Home", tasks: [] },
  ],
};

const taskListsSlice = createSlice({
  name: "taskLists",
  initialState,
  reducers: {
    createTaskList: {
      reducer(state, action) {
        state.taskLists.push(action.payload);
      },
      prepare(name) {
        return {
          payload: {
            id: uuid(),
            name,
            tasks: [],
          },
        };
      },
    },
    createTask: {
      reducer(state, action) {
        state.taskLists
          .find((taskList) => taskList.id === action.payload.taskListId)
          ?.tasks.push(action.payload);
      },
      prepare(taskListId, description, time) {
        return {
          payload: {
            taskListId,
            id: uuid(),
            description,
            time,
            completed: false,
          },
        };
      },
    },
  },
});

export const selectAllTaskLists = (state: RootState) =>
  state.taskLists.taskLists;

export const { createTask, createTaskList } = taskListsSlice.actions;

export default taskListsSlice.reducer;
