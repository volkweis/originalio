import styled from 'styled-components';

export const Container = styled.div`
  height: 30px;
  width: 30px;
  border: 3px solid #2A5A75;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${({prevNextOpacity})=> prevNextOpacity};
`;
