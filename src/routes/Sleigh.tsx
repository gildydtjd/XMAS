import React from 'react';
import styled from 'styled-components';
import SleighInfo from '../components/info/SleighInfo';
import Nav from '../components/nav/Nav';

const SleighDiv = styled.div`
  position: absolute;
  width: 100%;
  background-image: url('/assets/img/sleigh2.jpg');
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    display: block;
    background-size: cover;
  }
`;

function Sleigh() {
  return (
    <SleighDiv>
      <Nav />
      <SleighInfo />
    </SleighDiv>
  );
}

export default Sleigh;
