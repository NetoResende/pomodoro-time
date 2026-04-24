import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../cycles";
import { DefaultButton } from "../defaultButton";
import { DefaultInput } from "../defaultInput";
import { useTaskContext } from "../../contexts/taskContext/useTaskContext";
import { useState } from "react";

export function MainForm(){
  const {state} = useTaskContext();
  const [taskName, setTaskName ] = useState("");
  const {workTime} = state.config;

  function handlerCreateNewState(e: React.SubmitEvent<HTMLFormElement>){ 
    e.preventDefault()
    console.log('DEU CERTO', taskName, new Date().toLocaleString());
  }

  return (
    <form  className="form" onSubmit={handlerCreateNewState}>
          <div className="formrow">
            <DefaultInput 
              type="text" 
              id="MeuInput"
              labelText= "Task"
              placeholder='Digite algo'
              value={taskName}
              onChange={e => setTaskName(e.target.value)}
            />
          </div>
          <div className="formrow">
            <p>O Próximo intervalo é de {workTime}min</p>
          </div>
          <div className="formrow">
            <Cycles/>
          </div>
          <div className="formrow">
            <DefaultButton icon={<PlayCircleIcon/>}/>
          </div>
        </form>
  )
}