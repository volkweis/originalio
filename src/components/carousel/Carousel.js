import {
  Container,
  Wrapper,
  ProductBox,
  ProductImg,
  ProductInfo,
  HorizontalBtnWrapper,
  BtnUp,
  BtnDown,
  ProdColors,
} from './CarouselStyle';

import { ColorBox } from '../color/ColorBox';

import icons from '../../assets/icons';
import { useState } from 'react';
import { Price } from '../price/Price';

function Carousel({
  images,
  products,
  isRecommend,
  wrapperWidth,
  wrapperHeight,
  wrapperDirection,
  imgWidth,
  imgHeight,
  btnUpVisible,
  btnDownVisible,
  infoVisible,
  prodMarginRight,
  prodMarginLeft,
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
        <BtnUp
          btnUpVisible={btnUpVisible}
          onClick={increment}
          btnUpOpacity={limitUp ? '0.3' : '1'}
        >
          <img src={icons.up.default} alt={icons.up.default} />
        </BtnUp>
        {productBoxArray.map((product) => {
          if (isRecommend === 'true') {
            return (
              <ProductBox
                key={product}
                prodMarginRight={prodMarginRight}
                prodMarginLeft={prodMarginLeft}
              >
                <ProductImg
                  imgWidth={imgWidth}
                  imgHeight={imgHeight}
                  bgSize={imgWidth}
                  imgBg={products[top + product].images[0].default}
                />
                <ProductInfo infoVisible={infoVisible}>
                  <Price
                    fullPrice="false"
                    discountPrice={products[top + product].discountPrice}
                    priceFontSize="16px"
                    priceColor="#000"
                    priceFontWeight="normal"
                    priceMarginLeft="0px"
                    priceTop="0px"
                    priceLeft="0px"
                  ></Price>
                  <ProdColors>
                    {products[top + product].colors.map((color) => {
                      return (
                        <ColorBox
                          key={color.id}
                          color={color.hex}
                          height="13px"
                          width="13px"
                          marginLeft="6px"
                        />
                      );
                    })}
                  </ProdColors>
                </ProductInfo>
              </ProductBox>
            );
          } else {
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
          }
        })}
        <BtnDown
          btnDownVisible={btnDownVisible}
          onClick={decrement}
          btnDownOpacity={limitDown ? '0.3' : '1'}
        >
          <img src={icons.down.default} alt={icons.down.default} />
        </BtnDown>
        <HorizontalBtnWrapper></HorizontalBtnWrapper>
      </Wrapper>
    </Container>
  );
}

export { Carousel };
