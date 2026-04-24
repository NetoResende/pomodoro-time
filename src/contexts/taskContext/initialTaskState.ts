import type { TaskStateModel } from "../../models/taskStateModel";

export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedsecondsRemaining: "05:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    workBreakTime: 5,
    workLongBreakTime: 15,
  },
};