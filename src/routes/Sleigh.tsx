import React from 'react';
import styled from 'styled-components';
import Header from '../components/header/Header';
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
`;

function Sleigh() {
  return (
    <SleighDiv>
      <Header />
      <Nav />
      <SleighInfo />
    </SleighDiv>
  );
}

export default Sleigh;
