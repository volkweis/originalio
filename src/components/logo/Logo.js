import { Container } from './LogoStyle';
import { image } from '../../assets/img';

function Logo() {
  return (
    <Container>
      <img src={image.logo.default} alt={image.logo.default} />
    </Container>
  );
}

export { Logo };
