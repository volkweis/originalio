import { MainContainer, Container } from './AppStyle';
import { Header } from './components/header/Header';
import { Product } from './components/product/Product';
import { Recommendation } from './components/recommendation/Recommendation';
import { GlobalStyle } from './css/GlobalStyle';
import products from './products';

function App() {
  return (
    <MainContainer>
      <Container>
        <GlobalStyle />
        <Header />
        <Product/>
        <Recommendation products={products}/>
      </Container>
    </MainContainer>
  );
}

export default App;
