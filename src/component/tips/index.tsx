import { useTaskContext } from "../../contexts/taskContext/useTaskContext";
import { getNextCyclesType } from "../../utils/getNextCyclesType";
import { getNextCycles } from "../../utils/getNextcycles";

export function Tips (){
    const { state} = useTaskContext();
    const newCurrentcycle = getNextCycles(state.currentCycle);
    const newCurrentCyclesType = getNextCyclesType(newCurrentcycle);
 
    const taskForWhenActiveTask = {
      workTime: <span>Descanso de <b>{state.config.workTime} min!</b></span>,
      workBreakTime: <span> Descanso de  <b>{state.config.workBreakTime} min!</b></span>,
      workLongBreakTime: <span> Descanso longo de <b>{state.config.workLongBreakTime} min!</b></span>,
    }
    const taskForNoActiveTask = {
      workTime: <span> Próx. Pausa de <b>{state.config.workTime} min</b></span>,
      workBreakTime: <span> Próx. Pausa de <b>{state.config.workBreakTime} min</b></span>,
      workLongBreakTime: <span> Próx. Pausa é longa</span>,
    }

    return (
      <>
        {!!state.activeTask && taskForWhenActiveTask[state.activeTask.type]}
        {!state.activeTask && taskForNoActiveTask[newCurrentCyclesType]}
      </>
    )
}