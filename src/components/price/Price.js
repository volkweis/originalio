import {
  Container,
  PriceContainer,
  PrevPrice,
  CurrPrice,
  Division,
  Installment,
} from './PriceStyle';

import { formatPrice } from '../../utils/utils';

function Price({
  price,
  discountPrice,
  installments,
  fullPrice,
  priceFontSize,
  priceColor,
  priceFontWeight,
  priceMarginLeft,
  priceTop,
  priceLeft
}) {
  if (fullPrice === 'true') {
    return (
      <Container>
        <PriceContainer>
          <PrevPrice>R$ {formatPrice(price)}</PrevPrice>
          <Division>|</Division>
          <CurrPrice>R$ {formatPrice(discountPrice)}</CurrPrice>
        </PriceContainer>
        <Installment>
          Ou {installments}x de R$ {formatPrice(discountPrice / installments)}
        </Installment>
      </Container>
    );
  } else {
    return (
      <Container priceTop={priceTop} priceLeft={priceLeft}>
        <PriceContainer>
          <CurrPrice
            priceFontSize={priceFontSize}
            priceColor={priceColor}
            priceFontWeight={priceFontWeight}
            priceMarginLeft={priceMarginLeft}
          >
            R$ {formatPrice(discountPrice)}
          </CurrPrice>
        </PriceContainer>
      </Container>
    );
  }
}

export { Price };
