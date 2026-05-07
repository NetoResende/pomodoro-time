import type { TaskStateModel } from "../../models/taskStateModel";
import { formattesSecondsToMinutes } from "../../utils/formattedSecondsToMinutes";
import { getNextCycles } from "../../utils/getNextcycles";
import { TaskActionTypes, type taskActionModel } from "./taskAction";

export function taskReducer( state: TaskStateModel, action: taskActionModel ): TaskStateModel {

  switch(action.type){
    case TaskActionTypes.START_TASK : {

    const newTasck = action.payload
    const newCurrentcycle = getNextCycles(state.currentCycle);
    const secondsRemaining = newTasck.duration * 60;

      return {
        ...state,
        activeTask: newTasck,
        currentCycle: newCurrentcycle,
        secondsRemaining,
        formattedsecondsRemaining: formattesSecondsToMinutes(secondsRemaining),
        tasks: [...state.tasks, newTasck],
      };
    }

    case TaskActionTypes.INTERRUP_TASK : {
  
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedsecondsRemaining: "00:00",
        tasks: state.tasks.map((task) => {
                 if (state.activeTask && state.activeTask.id === task.id) {
                   return { ...task, interruptDate: Date.now() };
                 }
                return task;
               }),
      };
    }
    case TaskActionTypes.RESET_STATE : {
      return state;
    }
  }
  
  return state;
}