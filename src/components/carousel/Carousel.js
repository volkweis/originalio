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
  return (
    <Container>
      <Wrapper
        wrapperWidth={wrapperWidth}
        wrapperHeight={wrapperHeight}
        wrapperDirection={wrapperDirection}
      >
        <BtnUp btnUpVisible={btnUpVisible}><img src={icons.up.default} alt={icons.up.default}/></BtnUp>
        <ProductBox>
          <ProductImg
            imgWidth={imgWidth}
            imgHeight={imgHeight}
            bgSize={imgWidth}
            imgBg={images.img1.default}
          />
          <ProductInfo />
        </ProductBox>
        <ProductBox>
          <ProductImg
            imgWidth={imgWidth}
            imgHeight={imgHeight}
            bgSize={imgWidth}
            imgBg={images.img2.default}
          />
          <ProductInfo />
        </ProductBox>
        <ProductBox>
          <ProductImg
            imgWidth={imgWidth}
            imgHeight={imgHeight}
            bgSize={imgWidth}
            imgBg={images.img3.default}
          />
          <ProductInfo />
        </ProductBox>
        <ProductBox>
          <ProductImg
            imgWidth={imgWidth}
            imgHeight={imgHeight}
            bgSize={imgWidth}
            imgBg={images.img4.default}
          />
          <ProductInfo />
        </ProductBox>
        <BtnDown btnDownVisible={btnDownVisible}><img src={icons.down.default} alt={icons.down.default}/></BtnDown>
        <HorizontalBtnWrapper></HorizontalBtnWrapper>
      </Wrapper>
    </Container>
  );
}

export { Carousel };
