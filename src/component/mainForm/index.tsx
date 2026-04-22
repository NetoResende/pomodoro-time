import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../cycles";
import { DefaultButton } from "../defaultButton";
import { DefaultInput } from "../defaultInput";
import type { HomeProps } from "../../pages/home";

export function MainForm({ state, setState  }: HomeProps){
  const { workTime } = state.config;

  function handlerClick(){
    setState(prevState => {
      return {
        ...prevState,
        formattedsecondsRemaining: "12:34",
        config: {
          ...prevState.config,
          workTime: 47
        }
      }
    })
  }
  return (
    <form  className="form">

      <div>
        <button type="button" onClick={handlerClick}>Clicar R</button>
      </div>
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