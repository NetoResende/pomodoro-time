import { Container } from "./component/contai/Container.tsx";
import { Heading } from "./component/heading/Heading";

import "./styles/theme.css";
import "./styles/global.css";

export interface AppProps {
  children: React.ReactNode;
}

export function App() {
  return (
    <>
      <Container>
        <Heading>LOGO</Heading>
      </Container>
      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
}
