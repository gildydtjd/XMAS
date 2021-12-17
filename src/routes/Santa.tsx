import React from 'react';
import styled from 'styled-components';
import Header from '../components/header/Header';
import SantaInfo from '../components/info/SantaInfo';
import Nav from '../components/nav/Nav';

const SantaDiv = styled.div`
  background-image: url('/assets/img/santa.jpg');
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Santa() {
  return (
    <SantaDiv>
      <Header />
      <Nav />
      <SantaInfo />
    </SantaDiv>
  );
}

export default Santa;
