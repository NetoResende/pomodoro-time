import { Container } from "./component/contai/index.tsx";
import { Logo } from "./component/logo/index.tsx";
import { Menu } from "./component/menu/index.tsx";
import { CountDown } from "./component/countDown/index.tsx";
import { DefaultInput } from "./component/defaultInput/index.tsx";
import "./styles/theme.css";
import "./styles/global.css";

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
            <DefaultInput type="text" id="MeuInput"/>
          </div>
          <div className="formrow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="formrow">
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0 0</p>
          </div>
          <div className="formrow">
            <button type="button">enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
