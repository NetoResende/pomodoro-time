import { createContext } from "react";
import type { TaskStateModel } from "../../models/taskStateModel";
import { initialTaskState } from "./initialTaskState";
import type { taskActionModel } from "./taskAction";

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<taskActionModel>;
};

const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue);