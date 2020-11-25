import { Container, Previous, Current } from "./BreadcrumbsStyle";

function Breadcrumbs() {
  return <Container>
      <Previous>Home</Previous>  
      <Previous>/</Previous>  
      <Current>Sapatos</Current>
  </Container>;
}

export { Breadcrumbs };
