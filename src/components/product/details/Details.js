import { Color } from '../color/Color';
import { Price } from '../price/Price';
import { Container } from './DetailsStyle';
import { Ref } from './ref/Ref';
import { Size } from './size/Size';
import { Title } from './title/Title';

function Details({name, reference, price, discountPrice, colors, installments, sizes}) {
  return (
    <Container>
      <Title name={name}/>
      <Ref reference={reference}/>
      <Price price={price} discountPrice={discountPrice} installments={installments}/>
      <Color colors={colors}/>
      <Size sizes={sizes}/>
    </Container>
  );
}
export { Details };
