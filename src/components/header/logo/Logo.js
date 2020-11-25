import { Container, LogoImg } from './LogoStyle';
import { image } from '../../../assets/img';

function Logo() {
  return (
    <Container>
      <LogoImg src={image.logo.default} alt={image.logo.default} />
    </Container>
  );
}

export { Logo };
