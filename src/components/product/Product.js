import { Details } from './details/Details';
import { Picture } from './picture/Picture';
import { Container } from './ProductStyle';
import { VerticalGallery } from './verticalGallery/VerticalGallery';
import products  from '../../products';

function Product() {
  const product = products[0];

  return (
    <Container>
      <VerticalGallery images={product.images}/>
      <Picture image={product.images.img1.default}/>
      <Details
        name={product.name}
        reference={product.ref}
        price={product.price}
        discountPrice={product.discountPrice}
        colors={product.colors}
        installments={product.installments}
        sizes={product.sizes}
        description={product.description}
      />
    </Container>
  );
}

export { Product };
