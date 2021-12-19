import React from 'react';
import styled from 'styled-components';
import RudolfInfo from '../components/info/RudolfInfo';
import Nav from '../components/nav/Nav';
const RudolfContainer = styled.div``;
const RudolfDiv = styled.div`
  background-image: url('/assets/img/rudolf.jpg');
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

function Rudolf() {
  return (
    <RudolfContainer>
      <RudolfDiv>
        <Nav />
      </RudolfDiv>
      <RudolfInfo />
    </RudolfContainer>
  );
}

export default Rudolf;
