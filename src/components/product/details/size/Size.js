import { useState } from 'react';
import {
  Container,
  TextContainer,
  SizeText,
  SizeBox,
  SizeContainer,
} from './SizeStyle';

function Size({ sizes }) {
  const [active, setActive] = useState(sizes[4]);

  return (
    <Container>
      <TextContainer>
        <span>Tamanho:</span>
        <SizeText>({active})</SizeText>
      </TextContainer>
      <SizeContainer>
        {sizes.map((size) => (
          <SizeBox
            key={size}
            onClick={() => setActive(size)}
            bgColor={size === active ? '#DE8F75' : 'transparent'}
            color={size === active ? '#ffff' : '#5f75aa'}
            fontWeight={size === active ? 'bold' : 'normal'}

          >
            {size}
          </SizeBox>
        ))}
      </SizeContainer>
    </Container>
  );
}
export { Size };
