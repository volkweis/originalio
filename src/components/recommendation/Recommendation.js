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
        wrapperDirection="row"
        imgWidth="290px"
        imgHeight="374px"
        infoVisible="visible"
        prodMarginRight="5px"
        prodMarginLeft="5px"
        horWrapVisible="visible"
      />
    </Container>
  );
}
export { Recommendation };
