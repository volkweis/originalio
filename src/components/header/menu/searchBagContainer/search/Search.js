import icons from '../../../../../assets/icons';
import { Icon, Container, Input } from './SearchStyle';

function Search() {
  return (
    <Container>
      <Icon src={icons.search.default} alt={icons.search.default} />
      <Input type="text" placeholder="Busca"/>
    </Container>
  );
}

export { Search };
