import { useState } from 'react';
import {
  Container,
  ColorBox,
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
          <ColorBorder key={color.id} borderColor={color.id === active ? '#DE8F75' : 'transparent'}>
            <ColorBox
              color={color.hex}
              onClick={() => setActive(color.id)}
            />
          </ColorBorder>
        ))}
      </ColorContainer>
    </Container>
  );
}
export { Color };
