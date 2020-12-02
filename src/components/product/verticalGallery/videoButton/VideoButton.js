import {
  Container,
  VideoTitle,
  VideoFrame,
  VideoPlay,
  VideoBg,
} from './VideoButtonStyle';
import icons from '../../../../assets/icons';
import { image } from '../../../../assets/img';

function VideoButton() {
  return (
    <Container>
      <VideoTitle>Vídeo</VideoTitle>
      <VideoFrame>
        <VideoPlay
          src={icons.playVideo.default}
          alt={icons.playVideo.default}
        />
        <VideoBg bgImg={image.mainProd.default} />
      </VideoFrame>
    </Container>
  );
}
export { VideoButton };
