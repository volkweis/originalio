import { Details } from './details/Details';
import { Picture } from './picture/Picture';
import { Container } from './ProductStyle';
import { VerticalGallery } from './verticalGallery/VerticalGallery';

function Product() {
  return (
    <Container>
      <VerticalGallery />
      <Picture/>
      <Details/>
    </Container>
  );
}

export { Product };
