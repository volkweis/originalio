import {
  Container,
  PriceContainer,
  PrevPrice,
  CurrPrice,
  Division,
  Installment,
} from './PriceStyle';

import {formatPrice} from '../../../utils/utils';

function Price({price, discountPrice, installments}) {
 
  return (
    <Container>
      <PriceContainer>
        <PrevPrice>R$ {formatPrice(price)}</PrevPrice>
        <Division>|</Division>
        <CurrPrice>R$ {formatPrice(discountPrice)}</CurrPrice>
      </PriceContainer>
      <Installment>Ou {installments}x de R$ {formatPrice(discountPrice / installments)}</Installment>
    </Container>
  );
}

export { Price };
