import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${({priceLeft}) => priceLeft || '20px'};
  padding-top: ${({ priceTop }) => priceTop || '22px'};
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
  font-size: ${({ priceFontSize }) => priceFontSize || '20px'};
  color: ${({ priceColor }) => priceColor || '#686868'};
  font-weight: ${({ priceFontWeight }) => priceFontWeight || 'bold'};
  margin-left: ${({ priceMarginLeft }) => priceMarginLeft || '10px'};
`;

export const Installment = styled.div`
  font-size: 12px;
  color: #7f7f7f;
  height: 21px;
  display: flex;
  align-items: center;
`;
