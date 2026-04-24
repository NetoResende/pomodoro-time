import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../cycles";
import { DefaultButton } from "../defaultButton";
import { DefaultInput } from "../defaultInput";
import { useTaskContext } from "../../contexts/taskContext/useTaskContext";
import { useRef} from "react";

export function MainForm(){
  const {state} = useTaskContext();
  const {workTime} = state.config;
  const taskNameInput = useRef<HTMLInputElement>(null)

  function handlerCreateNewState(e: React.SubmitEvent<HTMLFormElement>){ 
    e.preventDefault()
    console.log('DEU CERTO', taskNameInput.current.value);
  }

  return (
    <form  className="form" onSubmit={handlerCreateNewState}>
          <div className="formrow">
            <DefaultInput 
              type="text" 
              id="MeuInput"
              labelText= "Task"
              placeholder='Digite algo'
              ref={taskNameInput}
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