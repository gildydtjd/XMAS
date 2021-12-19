import React from 'react';
import styled from 'styled-components';
import GiftInfo from '../components/info/GiftInfo';
import Nav from '../components/nav/Nav';
const GiftContainer = styled.div``;
const GiftDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/assets/img/gift.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;

  @media only screen and (max-width: 768px) {
    display: block;
    background-size: cover;
  }
`;

function Gift() {
  return (
    <GiftContainer>
      <GiftDiv>
        <Nav />
      </GiftDiv>
      <GiftInfo />
    </GiftContainer>
  );
}

export default Gift;
