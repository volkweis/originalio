import { MainContainer, Container } from './AppStyle';
import { Header } from './components/header/Header';
import { Product } from './components/product/Product';
import { GlobalStyle } from './css/GlobalStyle';

function App() {
  return (
    <MainContainer>
      <Container>
        <GlobalStyle />
        <Header />
        <Product/>
      </Container>
    </MainContainer>
  );
}

export default App;
