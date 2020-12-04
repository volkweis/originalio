import {
  Container,
  Wrapper,
  ProductBox,
  ProductImg,
  ProductInfo,
  HorizontalBtnWrapper,
  BtnUp,
  BtnDown,
} from './CarouselStyle';

import icons from '../../assets/icons';
import { useState } from 'react';

function Carousel({
  images,
  wrapperWidth,
  wrapperHeight,
  wrapperDirection,
  imgWidth,
  imgHeight,
  btnUpVisible,
  btnDownVisible,
}) {
  const [top, setTop] = useState(0);
  const [maxBox] = useState(4);
  const [limitUp, setLimitUp] = useState(false);
  const [limitDown, setLimitDown] = useState(true);
  const productBoxArray = [];

  for (let i = 0; i < maxBox; i++) {
    productBoxArray.push(i);
  }

  const increment = () => {
    if (images[top + productBoxArray.length] !== undefined) {
      setTop(top + 1);
      if (top + productBoxArray.length === images.length - 1) setLimitUp(true);
      if (limitDown === true) setLimitDown(false);
    }
  };

  const decrement = () => {
    if (top > 0) {
      if (top === 1) setLimitDown(true);
      setTop(top - 1);
      if (limitUp === true) setLimitUp(false);
    }
  };

  return (
    <Container>
      {console.log('Top', top, 'UP', limitUp, 'DOWN', limitDown)}
      <Wrapper
        wrapperWidth={wrapperWidth}
        wrapperHeight={wrapperHeight}
        wrapperDirection={wrapperDirection}
      >
        <BtnUp btnUpVisible={btnUpVisible} onClick={increment}>
          <img src={icons.up.default} alt={icons.up.default} />
        </BtnUp>
        {productBoxArray.map((product) => {
          return (
            <ProductBox key={product}>
              <ProductImg
                imgWidth={imgWidth}
                imgHeight={imgHeight}
                bgSize={imgWidth}
                imgBg={images[top + product].default}
              />
              <ProductInfo />
            </ProductBox>
          );
        })}
        <BtnDown btnDownVisible={btnDownVisible} onClick={decrement}>
          <img src={icons.down.default} alt={icons.down.default} />
        </BtnDown>
        <HorizontalBtnWrapper></HorizontalBtnWrapper>
      </Wrapper>
    </Container>
  );
}

export { Carousel };
