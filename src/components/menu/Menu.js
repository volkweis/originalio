import { Entrar } from '../entrar/Entrar';
import { Container } from './MenuStyle';
import Options from '../options/Options';

function Menu() {
  return (
    <Container>
      <Entrar />
      <Options/>
      <Entrar />
    </Container>
  );
}

export { Menu };
