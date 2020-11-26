import { Container, Image } from './PictureStyle';
import { image } from '../../../assets/img';

function Picture() {
  return (
    <Container>
      <Image src={image.mainProd.default} alt={image.mainProd.default} />
    </Container>
  );
}

export { Picture };
