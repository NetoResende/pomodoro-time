import { Container } from "../../component/contai";
import { CountDown } from "../../component/countDown";
import { MainForm } from "../../component/mainForm";
import type { TaskStateModel } from "../../models/taskStateModel";
import { MainTemplate } from "../../template/MainTemplate";

export type HomeProps = {
  state: TaskStateModel,
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}
export function Home(props: HomeProps) {
  
  return (
    <MainTemplate>
      <Container>
        <CountDown {...props}/>
      </Container>
      <Container>
        <MainForm  {...props}/>
      </Container>
    </MainTemplate>
  );
}
