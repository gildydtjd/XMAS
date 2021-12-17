import React from 'react';
import styled from 'styled-components';
import GiftInfo from '../components/info/GiftInfo';
import Nav from '../components/nav/Nav';

const GiftDiv = styled.div`
  position: absolute;
  width: 100%;
  background-image: url('/assets/img/gift.jpg');
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

function Gift() {
  return (
    <GiftDiv>
      <Nav />
      <GiftInfo />
    </GiftDiv>
  );
}

export default Gift;
