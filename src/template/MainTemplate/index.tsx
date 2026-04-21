import { Container } from "../../component/contai";
import { Footer } from "../../component/footer";
import { Logo } from "../../component/logo";
import { Menu } from "../../component/menu";

type MainTemplateProps = {
  children: React.ReactNode;
};
export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      {children}
      <Container>
        <Footer />
      </Container>
    </>
  );
}
