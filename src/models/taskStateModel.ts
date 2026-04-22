import type { TaskModel } from "./taskModel"

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedsecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number;
  
  config: {
    workTime: number;
    workBreakTime: number;
    workLongBreakTime: number;
  }
}