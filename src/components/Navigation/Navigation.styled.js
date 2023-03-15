import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const TitleNav = styled(NavLink)`
text-decoration: none;
 
  width: auto;
  margin: 0 auto;
  padding: 15px;
  letter-spacing: 2px;
 
  color: black;

  &:hover {
    border: 2px solid orange;
  }
  &.active{
    border: 2px solid orange;
  }

`;




export const BoxHome = styled.div`
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 0px;
    margin-bottom: 16px;
    
`;

