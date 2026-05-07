import type { TaskModel } from "../../models/taskModel"

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUP_TASK = 'INTERRUP_TASK',
  RESET_STATE = 'RESET_STATE'
}

export type taskActionsWithPayload = 
 {
  type: TaskActionTypes.START_TASK ;
   payload: TaskModel
}

export type taskActionsWinthoutPayload = 
| {
  type: TaskActionTypes.RESET_STATE;
}
| {
  type: TaskActionTypes.INTERRUP_TASK;
}


export type taskActionModel = 
| taskActionsWithPayload 
| taskActionsWinthoutPayload