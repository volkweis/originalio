import { Button } from '../../button/Button';
import { Color } from '../../color/Color';
import { Price } from '../../price/Price';
import { Container, DetailBox } from './DetailsStyle';
import { ProdDescription } from './prodDescription/ProdDescription';
import { Ref } from './ref/Ref';
import { Size } from './size/Size';
import { Title } from './title/Title';

function Details({
  name,
  reference,
  price,
  discountPrice,
  colors,
  installments,
  sizes,
  description,
}) {
  return (
    <Container>
      <DetailBox>
        <Title name={name} />
        <Ref reference={reference} />
        <Price
          fullPrice="true"
          price={price}
          discountPrice={discountPrice}
          installments={installments}
        />
        <Color colors={colors} />
        <Size sizes={sizes} />
        <Button
          text="adicionar à sacola"
          height="60px"
          width="404px"
          color="#32917b"
          marginLeft="20px"
          marginTop="53px"
          fontSize="18px"
        />
        <ProdDescription description={description} />
      </DetailBox>
    </Container>
  );
}
export { Details };
