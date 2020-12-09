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
  Summary,
} from './CarouselStyle';

import { ColorBox } from '../color/ColorBox';

import icons from '../../assets/icons';
import { useState } from 'react';
import { Price } from '../price/Price';
import { BtnPrevNext } from '../btnPrevNext/BtnPrevNext';

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
  horWrapVisible,
}) {
  const [top, setTop] = useState(0);
  const [maxBox] = useState(4);
  const [limitUp, setLimitUp] = useState(false);
  const [limitDown, setLimitDown] = useState(true);
  const productBoxArray = [];

  for (let i = 0; i < maxBox; i++) {
    productBoxArray.push(i);
  }

  const incrementVertical = () => {
    if (images[top + productBoxArray.length] !== undefined) {
      setTop(top + 1);
      if (top + productBoxArray.length === images.length - 1) setLimitUp(true);
      if (limitDown === true) setLimitDown(false);
    }
  };

  const incrementHorizontal = () => {
    if(top < products.length-1) setTop(top + 1);
  }

  const decrement = () => {
    if (top > 0) {
      if (top === 1) setLimitDown(true);
      setTop(top - 1);
      if (limitUp === true) setLimitUp(false);
    }
  };



  return (
    <Container>
      {console.log("top", top)}
      <Wrapper
        wrapperWidth={wrapperWidth}
        wrapperHeight={wrapperHeight}
        wrapperDirection={wrapperDirection}
      >
        <BtnUp
          btnUpVisible={btnUpVisible}
          onClick={incrementVertical}
          btnUpOpacity={limitUp ? '0.3' : '1'}
        >
          <img src={icons.up.default} alt={icons.up.default} />
        </BtnUp>
        {productBoxArray.map((productBox) => {
          if (isRecommend === 'true') {
            return (
              <ProductBox
                key={productBox}
                prodMarginRight={prodMarginRight}
                prodMarginLeft={prodMarginLeft}
              >
                <ProductImg
                  imgWidth={imgWidth}
                  imgHeight={imgHeight}
                  bgSize={imgWidth}
                  imgBg={products[top + productBox].images[0].default}
                />
                <ProductInfo infoVisible={infoVisible}>
                  <Price
                    fullPrice="false"
                    discountPrice={products[top + productBox].discountPrice}
                    priceFontSize="16px"
                    priceColor="#000"
                    priceFontWeight="normal"
                    priceMarginLeft="0px"
                    priceTop="0px"
                    priceLeft="0px"
                  ></Price>
                  <ProdColors>
                    {products[top + productBox].colors.map((color) => {
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
              <ProductBox key={productBox}>
                <ProductImg
                  imgWidth={imgWidth}
                  imgHeight={imgHeight}
                  bgSize={imgWidth}
                  imgBg={images[top + productBox].default}
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
      </Wrapper>
      <HorizontalBtnWrapper horWrapVisible={horWrapVisible}>
        <div onClick={decrement}><BtnPrevNext arrow={icons.left.default}/></div>
        <Summary>1 de 3</Summary>
        <div onClick={incrementHorizontal}><BtnPrevNext arrow={icons.right.default} /></div>
      </HorizontalBtnWrapper>
    </Container>
  );
}

export { Carousel };
