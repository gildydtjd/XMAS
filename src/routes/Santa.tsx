import React from 'react';
import styled from 'styled-components';
import SantaInfo from '../components/info/SantaInfo';
import Nav from '../components/nav/Nav';

const SantaDiv = styled.div`
  position: absolute;
  width: 100%;
  background-image: url('/assets/img/santa.jpg');
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

function Santa() {
  return (
    <SantaDiv>
      <Nav />
      <SantaInfo />
    </SantaDiv>
  );
}

export default Santa;
