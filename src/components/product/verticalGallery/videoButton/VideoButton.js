import {
  Container,
  VideoTitle,
  VideoFrame,
  VideoPlay,
  VideoBg,
} from './VideoButtonStyle';
import icons from '../../../../assets/icons';

function VideoButton({image}) {
  return (
    <Container>
      <VideoTitle>Vídeo</VideoTitle>
      <VideoFrame>
        <VideoPlay
          src={icons.playVideo.default}
          alt={icons.playVideo.default}
        />
        <VideoBg bgImg={image} />
      </VideoFrame>
    </Container>
  );
}
export { VideoButton };
