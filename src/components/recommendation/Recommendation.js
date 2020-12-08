import { Carousel } from '../carousel/Carousel';
import { Container } from './RecommendationStyle';
import { RecoTitle } from './recoTitle/RecoTitle';

function Recommendation({ products }) {
  return (
    <Container>
      <RecoTitle />
      <Carousel
        isRecommend="true"
        products={products}
        wrapperWidth="100%"
        wrapperHeight="457px"
        wrapperDirection="row"
        imgWidth="290px"
        imgHeight="374px"
        infoVisible="visible"
        prodMarginRight="5px"
        prodMarginLeft="5px"
      />
    </Container>
  );
}
export { Recommendation };
