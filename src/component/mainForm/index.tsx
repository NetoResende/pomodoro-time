import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../cycles";
import { DefaultButton } from "../defaultButton";
import { DefaultInput } from "../defaultInput";
import { useTaskContext } from "../../contexts/taskContext/useTaskContext";
import { useRef } from "react";
import type { TaskModel } from "../../models/taskModel";
import { getNextCyclesType } from "../../utils/getNextCyclesType";
import { TaskActionTypes } from "../../contexts/taskContext/taskAction";
import { getNextCycles } from "../../utils/getNextcycles";

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const newCurrentcycle = getNextCycles(state.currentCycle);
  const newCurrentCyclesType = getNextCyclesType(newCurrentcycle);

  function handlerCreateNewState(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()

     if(taskNameInput.current === null) return;
    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert("Digite o nome da favor!");
      return;
    }
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[newCurrentCyclesType],
      type: newCurrentCyclesType,
    };
    
    dispatch({type: TaskActionTypes.START_TASK, payload: newTask})
  }

  function hndlerInterrupterTask() {
    dispatch({type: TaskActionTypes.INTERRUP_TASK})
  }

  return (
    <form className="form" onSubmit={handlerCreateNewState}>
      <div className="formrow">
        <DefaultInput
          type="text"
          id="MeuInput"
          labelText="Task"
          placeholder="Digite algo"
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>
      <div className="formrow">
        <p>O Próximo intervalo é de {state.secondsRemaining / 60}min</p>
      </div>
      {state.currentCycle > 0 && (
        <div className="formrow">
          <Cycles />
        </div>
      )}
      <div className="formrow">
        {!state.activeTask ? (
          <DefaultButton
            area-label="Iniciar nova tarefa"
            title="Iniciar nova tarefa"
            type="submit"
            icon={<PlayCircleIcon />}
            key="Butao_submit"
          />
        ) : (
          <DefaultButton
            area-label="Interromper tarefa atual"
            title="Interromper tarefa atual"
            type="button"
            color="red"
            icon={<StopCircleIcon />}
            key="Butao_button"
            onClick={hndlerInterrupterTask}
          />
        )}
      </div>
    </form>
  );
}
