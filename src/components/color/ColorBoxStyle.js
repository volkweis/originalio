import styled from 'styled-components';

export const Container = styled.div`
background: ${({color}) => color || '#bada55'};
height: ${({height}) => height || '22px'};
width: ${({width}) => width || '22px'};
border-radius: 50%;
margin-left: ${({marginLeft}) => marginLeft || 0};
`;