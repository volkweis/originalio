import { Carousel } from '../../carousel/Carousel';
import { Container } from './VerticalGalleryStyle';
import { VideoButton } from './videoButton/VideoButton';

function VerticalGallery({ images }) {
  
  return (
    <Container>
      <VideoButton image={images[0].default} />
      <Carousel
        isRecommend='false'
        wrapperWidth="82px"
        wrapperHeight="463px;"
        wrapperDirection="column"
        imgWidth="82px"
        imgHeight="94px"
        images={images}
        btnUpVisible="visible"
        btnDownVisible="visible"
      />
    </Container>
  );
}

export { VerticalGallery };
