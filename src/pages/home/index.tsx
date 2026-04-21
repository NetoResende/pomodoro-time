import { Container } from "../../component/contai";
import { CountDown } from "../../component/countDown";
import { MainForm } from "../../component/mainForm";
import { MainTemplate } from "../../template/MainTemplate";

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <MainForm/>
      </Container>
    </MainTemplate>
  );
}
