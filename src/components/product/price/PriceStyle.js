import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-top: 22px;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PrevPrice = styled.span`
  font-size: 14px;
  color: #e35442;
  text-decoration-line: line-through;
`;

export const Division = styled.span`
  font-size: 14px;
  color: #e35442;
  margin-left: 2px;
`;

export const CurrPrice = styled.span`
  font-size: 20px;
  color: #686868;
  font-weight: bold;
  margin-left: 10px;
`;

export const Installment = styled.div`
  font-size: 12px;
  color: #7F7F7F;
  margin-top: 2px;
`;


