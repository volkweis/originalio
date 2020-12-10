import { Container } from './BtnPrevNextStyle';

function BtnPrevNext({ arrow, prevNextOpacity }) {
  return (
    <Container prevNextOpacity={prevNextOpacity}>
      {console.log(prevNextOpacity)}
      <img src={arrow} alt={arrow} />
    </Container>
  );
}
export { BtnPrevNext };
