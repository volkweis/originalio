import { Container } from "./ColorBoxStyle";

function ColorBox({color, width, height, marginLeft}) {
  return <Container color={color} width={width} height={height} marginLeft={marginLeft}></Container>;
}
export { ColorBox };
