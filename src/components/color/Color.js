import { useState } from 'react';
import { ColorBox } from './ColorBox';
import {
  Container,
  ColorDescContainer,
  ColorName,
  ColorContainer,
  ColorBorder,
} from './ColorStyle';

function Color({ colors }) {
  const [active, setActive] = useState(colors[0].id);

  return (
    <Container>
      <ColorDescContainer>
        <span>Cor: </span>
        <ColorName>({colors[active].name})</ColorName>
      </ColorDescContainer>
      <ColorContainer>
        {colors.map((color) => (
          <ColorBorder
            key={color.id}
            borderColor={color.id === active ? '#DE8F75' : 'transparent'}
            onClick={() => setActive(color.id)}
          >
            <ColorBox color={color.hex}></ColorBox>
          </ColorBorder>
        ))}
      </ColorContainer>
    </Container>
  );
}
export { Color };
