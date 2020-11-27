import {
  Container,
  PriceContainer,
  PrevPrice,
  CurrPrice,
  Division,
  Installment,
} from './PriceStyle';

import {formatPrice} from '../../../utils/utils';

function Price() {
    const prevPrice = 69;
    const currPrice = 55.20;
    const installm = 6;
  return (
    <Container>
      <PriceContainer>
        <PrevPrice>R$ {formatPrice(prevPrice)}</PrevPrice>
        <Division>|</Division>
        <CurrPrice>R$ {formatPrice(currPrice)}</CurrPrice>
      </PriceContainer>
      <Installment>Ou {installm}x de R$ {formatPrice(currPrice / installm)}</Installment>
    </Container>
  );
}

export { Price };
