import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 56px;
`;

export const Image = styled.img`
  width: ${({ width }) => width || '430px'};
  height: ${({ height }) => height || '556px'};
`;
