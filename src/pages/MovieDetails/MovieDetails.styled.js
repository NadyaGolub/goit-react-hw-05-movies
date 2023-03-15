import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Btn = styled.button`
  position: relative;
  display: block;
  color: white;
  font-size: 14px;
  font-family: 'montserrat';
  text-decoration: none;
  margin: 30px 0;
  border: 2px solid #ff7675;
  padding: 14px 60px;
  text-transform: uppercase;

  background-color: black;

  &:hover {
    background-color: orange;
  }

`;

export const MoreInfoLink = styled(NavLink)`
  margin: 0;
  padding: 5px;
  display: block;
  color: black;
  text-decoration: none;
  list-style: none;
  &.active {
    color: #ff4388;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    text-decoration: underline;
  }
`;

export const Section = styled.section`
    display: flex;
    gap: 30px;
    border-bottom: 1px solid rgb(114, 114, 114);
    padding: 15px 0px;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
`;

