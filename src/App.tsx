import { Container } from "./component/contai/index.tsx";
import { Logo } from "./component/logo/index.tsx";
import { Menu } from "./component/menu/index.tsx";
import { CountDown } from "./component/countDown/index.tsx";
import { DefaultInput } from "./component/defaultInput/index.tsx";
import { Cycles } from "./component/cycles/index.tsx";
import { DefaultButton } from "./component/defaultButton/index.tsx";
import { PlayCircleIcon} from "lucide-react";
import "./styles/theme.css";
import "./styles/global.css";
import { Footer } from "./component/footer/index.tsx";

export interface AppProps {
  children: React.ReactNode;
}

export function App() {
  return (
    <>
      <Container>
        <Logo/>
      </Container>
      <Container>
        <Menu/>
      </Container>
      <Container>
        <CountDown/>
      </Container>
      <Container>
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
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="formrow">
            <Cycles/>
          </div>
          <div className="formrow">
            <DefaultButton icon={<PlayCircleIcon/>}/>
          </div>
        </form>
      </Container>

      <Container>
        <Footer/>
      </Container>
    </>
  );
}
