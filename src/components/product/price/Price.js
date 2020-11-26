import {
  Container,
  PriceContainer,
  PrevPrice,
  CurrPrice,
  Division,
  Installment,
} from './PriceStyle';

function Price() {
    const prevPrice = 69.00;
    const currPrice = 55.20;
    const installm = 6;
  return (
    <Container>
      <PriceContainer>
        <PrevPrice>R$ {prevPrice.toFixed(2).toString().replace('.', ',')}</PrevPrice>
        <Division>|</Division>
        <CurrPrice>R$ {currPrice.toFixed(2).toString().replace('.', ',')}</CurrPrice>
      </PriceContainer>
      <Installment>Ou {installm}x de R$ {(currPrice / installm).toFixed(2).toString().replace('.', ',')}</Installment>
    </Container>
  );
}

export { Price };
