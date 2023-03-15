import styled from 'styled-components';

export const Container = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

export const Item = styled.li`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
width:400px;
  &:hover {
    box-shadow: 10px 5px 5px orange;
  }
`;

export const Title = styled.h2`
text-decoration: none;
color: black;
text-align: center;

&:auto {
  
  hyphens: auto;
}

`;