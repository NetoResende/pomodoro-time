import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../cycles";
import { DefaultButton } from "../defaultButton";
import { DefaultInput } from "../defaultInput";

export function MainForm(){

  return (
    <form  className="form">

          <div className="formrow">
            <DefaultInput 
              type="text" 
              id="MeuInput"
              labelText= "Task"
              placeholder='Digite algo'
            />
          </div>
          <div className="formrow">
            <p>O Próximo intervalo é de 25min</p>
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