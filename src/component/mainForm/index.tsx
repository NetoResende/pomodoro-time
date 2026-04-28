import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../cycles";
import { DefaultButton } from "../defaultButton";
import { DefaultInput } from "../defaultInput";
import { useTaskContext } from "../../contexts/taskContext/useTaskContext";
import { useRef } from "react";
import type { TaskModel } from "../../models/taskModel";
import { getNextCycles } from "../../utils/getNextcycles";
import { getNextCyclesType } from "../../utils/getNextCyclesType";
import { formattesSecondsToMinutes } from "../../utils/formattedSecondsToMinutes";

export function MainForm() {
  const { state, setState } = useTaskContext();

  const taskNameInput = useRef<HTMLInputElement>(null);
  const newCurrentcycle = getNextCycles(state.currentCycle)
  const newCurrentCyclesType = getNextCyclesType(newCurrentcycle)


  function handlerCreateNewState(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    // if(taskNameInput.current === null) return;
    const taskName = taskNameInput.current.value.trim();
  
    if(!taskName){
      alert("Digite o nome da favor!")
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
    }
    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: {...prevState.config},
        activeTask: newTask,
        currentCycle: newCurrentcycle,
        secondsRemaining,
        formattedsecondsRemaining: formattesSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask]
      }
    })
    // taskNameInput.current.value="";
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
        />
      </div>
      <div className="formrow">
        <p>O Próximo intervalo é de {state.secondsRemaining / 60}min</p>
      </div>
      <div className="formrow">
        <Cycles />
      </div>
      <div className="formrow">
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
