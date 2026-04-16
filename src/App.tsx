import { Container } from "./component/contai/index.tsx";
import { Logo } from "./component/logo/index.tsx";

import "./styles/theme.css";
import "./styles/global.css";
import { CountDown } from "./component/countDown/index.tsx";
import { Menu } from "./component/menu/index.tsx";

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
    </>
  );
}
