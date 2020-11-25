import { Bag } from './bag/Bag';
import { Search } from './search/Search';
import { Container } from './SearchBagContainerStyle';

function SearchBagContainer() {
  return (
    <Container>
      <Search />
      <Bag/>
    </Container>
  );
}

export { SearchBagContainer };
