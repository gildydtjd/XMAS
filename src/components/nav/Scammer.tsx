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

  @media only screen and (max-width: 768px) {
    width: 100%;
    ul {
      padding: 10px 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      li {
        font-size: 15px;
        margin: 5px;
      }
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
          <NavLink to="/Santa">FRAUD</NavLink>
        </li>
        <li>
          <NavLink to="/Rudolf">GAMBLING</NavLink>
        </li>
        <li>
          <NavLink to="/Sleigh">DRUG</NavLink>
        </li>
        <li>
          <NavLink to="/Gift">THEFT</NavLink>
        </li>
      </ul>
    </NavDiv>
  );
}

export default Nav;
