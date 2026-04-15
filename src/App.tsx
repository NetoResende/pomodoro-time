import { Container } from "./component/contai/index.tsx";
import { Heading } from "./component/heading/index.tsx";

import "./styles/theme.css";
import "./styles/global.css";
import { Logo } from "./component/logo/index.tsx";

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
        <Heading>MENU</Heading>
      </Container>
    </>
  );
}
