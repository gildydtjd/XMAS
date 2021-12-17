import React from 'react';
import styled from 'styled-components';
import Header from '../components/header/Header';
import RudolfInfo from '../components/info/RudolfInfo';
import Nav from '../components/nav/Nav';

const RudolfDiv = styled.div`
  position: absolute;
  width: 100%;
  background-image: url('/assets/img/rudolf.jpg');
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Rudolf() {
  return (
    <RudolfDiv>
      <Header />
      <Nav />
      <RudolfInfo />
    </RudolfDiv>
  );
}

export default Rudolf;
