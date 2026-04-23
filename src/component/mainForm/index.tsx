import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../cycles";
import { DefaultButton } from "../defaultButton";
import { DefaultInput } from "../defaultInput";
import { useTaskContext } from "../../contexts/taskContext";

export function MainForm(){
  const {state,setState} = useTaskContext()
  const {workTime} = state.config;

  function handlerButton(){
    setState(prevState => {
      return {
        ...prevState,
        formattedsecondsRemaining: "46:15",
        config: {
          ...prevState.config,
          workTime: 35,
        }
      }
    })
  }

  return (
    <form  className="form">

        <button onClick={handlerButton} type="button">Clicar</button>

          <div className="formrow">
            <DefaultInput 
              type="text" 
              id="MeuInput"
              labelText= "Task"
              placeholder='Digite algo'
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