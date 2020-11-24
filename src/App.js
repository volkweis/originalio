import { MainContainer, Container } from './AppStyle';
import { Header } from './components/header/Header';
import { GlobalStyle } from './css/GlobalStyle';

function App() {
  return (
    <MainContainer>
      <Container>
        <GlobalStyle />
        <Header />
      </Container>
    </MainContainer>
  );
}

export default App;
