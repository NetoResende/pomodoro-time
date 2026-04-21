import { Container } from "../../component/contai";
import { MainTemplate } from "../../template/MainTemplate";

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex enim
          voluptates reiciendis harum possimus neque dolores, consequuntur
          fugiat ipsum omnis explicabo nulla ipsa in labore molestiae tempore
          quisquam dolorum nemo!
        </p>
      </Container>
    </MainTemplate>
  );
}
