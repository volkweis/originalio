import styled from 'styled-components';

export const Container = styled.div`
padding-left: 20px;
display: flex;
flex-direction: column;`;

export const ColorContainer = styled.div`
height: 28px;
margin-top: 7px;
display: flex;
flex-direction: row;
align-items: center;
`;

export const ColorBorder = styled.div`
height: 24px;
width: 24px;
border-radius: 50%;
border: 2px solid ${({borderColor})=> borderColor || 'transparent'};
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-right: 15px;
`;

export const ColorDescContainer = styled.div`
height: 36px;
display: flex;
flex-direction: row;
align-items: center;
font-size: 14px;
margin-top: 34px;
`;

export const ColorName = styled.span`
color: #5F75AA;
margin-left: 10px;`;