import icons from '../../../../../assets/icons';
import { Container, BagImg, Counter } from './BagStyle';

function Bag() {
  return <Container>
      <BagImg src={icons.bag.default} alt={icons.bag.default}/>
      <Counter>0</Counter>
  </Container>;
}

export { Bag };
