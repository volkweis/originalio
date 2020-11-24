import { Container } from './HeaderStyle';
import { Menu } from '../menu/Menu';
import { Logo } from '../logo/Logo';

function Header() {
  return (
    <div>
      <Container>
        <Logo />
        <Menu />
      </Container>
    </div>
  );
}

export { Header };
