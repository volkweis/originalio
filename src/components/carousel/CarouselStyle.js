import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: ${({ wrapperWidth }) => wrapperWidth};
  display: flex;
  flex-direction: ${({ wrapperDirection }) => wrapperDirection};
  justify-content: space-between;
`;

export const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ prodMarginLeft }) => prodMarginLeft || '0px'};
  margin-right: ${({ prodMarginRight }) => prodMarginRight || '0px'};
`;

export const ProductImg = styled.div`
  width: ${({ imgWidth }) => imgWidth};
  height: ${({ imgHeight }) => imgHeight};
  background: url(${({ imgBg }) => imgBg});
  background-size: ${({ bgSize }) => bgSize};
  margin-bottom: 3px;
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
  visibility: ${({ horWrapVisible }) => horWrapVisible || 'hidden'};
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const BtnUp = styled.div`
  text-align: center;
  margin-bottom: 10px;
  opacity: ${({ btnUpOpacity }) => btnUpOpacity};
  visibility: ${({ btnUpVisible }) => btnUpVisible || 'hidden'};
  cursor: pointer;
`;

export const BtnDown = styled.div`
  text-align: center;
  margin-top: 5px;
  opacity: ${({ btnDownOpacity }) => btnDownOpacity};
  visibility: ${({ btnDownVisible }) => btnDownVisible || 'hidden'};
  cursor: pointer;
`;

export const ProdColors = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Summary = styled.div`
font-family: Open Sans;
font-size: 14px;
line-height: 23px;
text-align: center;
color: #2A5A75;
margin-left: 23px;
margin-right: 23px;
`;
