import styled from 'styled-components';

export const Container = styled.div`
  margin-top: ${({ marginTop }) => marginTop || 0};
  margin-left: ${({ marginLeft }) => marginLeft || 0};
`;
export const Btn = styled.button`
  width: ${({ width }) => width || '100px'};
  height: ${({ height }) => height || '30px'};
  background: ${({ color }) => color || '#000'};
  font-size: ${({ fontSize }) => fontSize || '14px'};
  font-family: 'Montserrat';
  text-transform: uppercase;
  color: white;
  border-radius: 3px;
  border: none;
  outline: none;
  cursor: pointer;
`;
