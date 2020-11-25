import { Entrar } from './entrar/Entrar';
import { Container } from './MenuStyle';
import Options from './options/Options';
import { SearchBagContainer } from './searchBagContainer/SearchBagContainer';

function Menu() {
  return (
    <Container>
      <Entrar />
      <Options/>
      <SearchBagContainer />
    </Container>
  );
}

export { Menu };
