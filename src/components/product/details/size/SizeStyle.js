import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  margin-top: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  height: 36px;
  width: 366px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`;

export const SizeBox = styled.div`
height: 34px;
width: 34px;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid #D2E1DF;
box-sizing: border-box;
border-radius: 2px;
color: ${({color})=> color || '#5f75aa'};
font-family: Open Sans;
font-size: 14px;
font-weight: ${({fontWeight})=> fontWeight || 'normal'};
line-height: 23px;
margin-right: 3px;
cursor: pointer;
background: ${({bgColor}) => bgColor || 'transparent'};
`;

export const SizeText = styled.span`
  margin-right: 97px;
  color: #5f75aa;
`;

export const SizeContainer = styled.div`
  height: 34px;
  display: flex;
  flex-direction: row;
`;
