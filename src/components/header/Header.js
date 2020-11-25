import { Container } from './HeaderStyle';
import { Menu } from './menu/Menu';
import { Logo } from './logo/Logo';
import { Breadcrumbs } from './breadcrumbs/Breadcrumbs';

function Header() {
  return (
    <div>
      <Container>
        <Logo />
        <Menu />
        <Breadcrumbs />
      </Container>
    </div>
  );
}

export { Header };
