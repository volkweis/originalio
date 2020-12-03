import { Container, Image } from './PictureStyle';

function Picture({image}) {
  return (
    <Container>
      <Image src={image} alt={image} />
    </Container>
  );
}

export { Picture };
