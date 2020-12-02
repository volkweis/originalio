import { Container, Btn } from './ButtonStyle';

function Button({ text, height, width, color, marginLeft, marginTop, fontSize }) {
  return (
    <Container marginLeft={marginLeft} marginTop={marginTop}>
      <Btn height={height} width={width} color={color} fontSize={fontSize}>
        {text}
      </Btn>
    </Container>
  );
}
export { Button };
