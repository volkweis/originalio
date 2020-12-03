import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: ${({ wrapperWidth }) => wrapperWidth};
  height: ${({ wrapperHeight }) => wrapperHeight};
  display: flex;
  flex-direction: ${({ wrapperDirection }) => wrapperDirection};
  justify-content: space-between;
`;

export const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductImg = styled.div`
  width: ${({ imgWidth }) => imgWidth};
  height: ${({ imgHeight }) => imgHeight};
  background: url(${({ imgBg }) => imgBg});
  background-size: ${({ bgSize }) => bgSize};
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  visibility: ${({ infoVisible }) => infoVisible || 'hidden'};
`;

export const HorizontalBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  visibility: ${({ btnVisible }) => btnVisible || 'hidden'};
`;

export const BtnUp = styled.div`
  text-align: center;
  margin-bottom: 10px;
  visibility: ${({ btnUpVisible }) => btnUpVisible || 'hidden'};
`;

export const BtnDown = styled.div`
  text-align: center;
  margin-top: 5px;
  visibility: ${({ btnDownVisible }) => btnDownVisible || 'hidden'};
`;
