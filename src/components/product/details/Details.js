import { Price } from '../price/Price';
import { Container } from './DetailsStyle';
import { Ref } from './ref/Ref';
import { Title } from './title/Title';

function Details() {
  return (
    <Container>
      <Title />
      <Ref />
      <Price/>
    </Container>
  );
}
export { Details };
