import React from 'react';
import styled from 'styled-components';
const NavDiv = styled.div`
  float: left;
  width: 20%;
  height: 100vh;
  ul {
    color: #ffffff;
    padding: 20px 60px;
    li {
      list-style: none;
      font-size: 64px;
      font-weight: 800;
      cursor: pointer;
    }
    li:hover {
      color: gold;
    }
  }
`;
function Nav() {
  return (
    <NavDiv>
      <ul>
        <li>SANTA</li>
        <li>RUDOLF</li>
        <li>SLEIGH</li>
        <li>GIFT</li>
      </ul>
    </NavDiv>
  );
}

export default Nav;
