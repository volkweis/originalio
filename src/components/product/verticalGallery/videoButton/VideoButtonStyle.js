import styled from 'styled-components';

export const Container = styled.div`
  height: 73px;
  width: 82px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const VideoTitle = styled.div`
  height: 28px;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #de8f75;
`;

export const VideoFrame = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const VideoBg = styled.div`
  width: 82px;
  height: 45px;
  background: url(${({ bgImg }) => bgImg});
  background-size: 82px;
  background-position: center;
  opacity: 0.4;
`;


export const VideoPlay = styled.img`
position: absolute;
  width: 35px;
  height: 34px;
  z-index: 1;
`;
