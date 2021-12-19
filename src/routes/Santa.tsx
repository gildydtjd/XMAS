import React from 'react';
import styled from 'styled-components';
import SantaInfo from '../components/info/SantaInfo';
import Nav from '../components/nav/Nav';
const SantaContainer = styled.div``;
const SantaDiv = styled.div`
  background-image: url('/assets/img/santa.jpg');
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;

  @media only screen and (max-width: 768px) {
    display: block;
    background-size: cover;
  }
`;

function Santa() {
  return (
    <SantaContainer>
      <SantaDiv>
        <Nav />
      </SantaDiv>
      <SantaInfo />
    </SantaContainer>
  );
}

export default Santa;
