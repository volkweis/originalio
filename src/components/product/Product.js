import { Details } from './details/Details';
import { Picture } from './picture/Picture';
import { Container } from './ProductStyle';
import { VerticalGallery } from './verticalGallery/VerticalGallery';
import { products } from '../../products.json';

function Product() {
  const product = products[0];

  return (
    <Container>
      <VerticalGallery />
      <Picture />
      <Details
        name={product.name}
        reference={product.ref}
        price={product.price}
        discountPrice={product.discountPrice}
        colors={product.colors}
        installments={product.installments}
        sizes={product.sizes}
      />
    </Container>
  );
}

export { Product };
