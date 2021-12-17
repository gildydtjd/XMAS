import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const NavDiv = styled.div`
  float: left;
  width: 20%;
  height: 100vh;
  ul {
    padding: 20px 60px;
    li {
      list-style: none;
      font-size: 64px;
      font-weight: 800;
      cursor: pointer;
    }
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  :hover {
    color: gold;
  }
`;
function Nav() {
  return (
    <NavDiv>
      <ul>
        <li>
          <NavLink to="/Santa">SANTA</NavLink>
        </li>
        <li>
          <NavLink to="/Rudolf">RUDOLF</NavLink>
        </li>
        <li>
          <NavLink to="/Sleigh">SLEIGH</NavLink>
        </li>
        <li>
          <NavLink to="/Gift">GIFT</NavLink>
        </li>
      </ul>
    </NavDiv>
  );
}

export default Nav;
