import { v4 as uuid } from "uuid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

export type Task = {
  description: string;
  time: string;
  taskId: string;
  completed: boolean;
};

export type TaskList = {
  taskListId: string;
  name: string;
  tasks: Task[];
};

const initialState: { taskLists: TaskList[] } = {
  taskLists: [
    { taskListId: uuid(), name: "Gym", tasks: [] },
    { taskListId: uuid(), name: "Work", tasks: [] },
    { taskListId: uuid(), name: "Home", tasks: [] },
  ],
};

const taskListsSlice = createSlice({
  name: "taskLists",
  initialState,
  reducers: {
    createTaskList: {
      reducer(state, action: PayloadAction<TaskList>) {
        state.taskLists.push(action.payload);
      },
      prepare({ name }: { name: string }) {
        return {
          payload: {
            taskListId: uuid(),
            name,
            tasks: [],
          },
        };
      },
    },
    createTask: {
      reducer(state, action: PayloadAction<Task & { taskListId: string }>) {
        state.taskLists
          .find((taskList) => taskList.taskListId === action.payload.taskListId)
          ?.tasks.push(action.payload);
      },
      prepare({
        taskListId,
        description,
        time,
      }: {
        taskListId: string;
        description: string;
        time: string;
      }) {
        return {
          payload: {
            taskListId,
            taskId: uuid(),
            description,
            time,
            completed: false,
          },
        };
      },
    },
    toggleTaskCompletion: (state, action) => {
      const { taskId, taskListId } = action.payload;
      const task = state.taskLists
        .find((taskList) => taskList.taskListId === taskListId)
        ?.tasks.find((task) => task.taskId === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const selectAllTaskLists = (state: RootState) =>
  state.taskLists.taskLists;

export const { createTask, createTaskList, toggleTaskCompletion } =
  taskListsSlice.actions;

export default taskListsSlice.reducer;
