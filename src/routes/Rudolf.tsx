import React from 'react';
import styled from 'styled-components';
import Nav from '../components/nav/Nav';
const RudolfContainer = styled.div``;
const RudolfDiv = styled.div`
  background-image: url('/assets/img/rudolf.jpg');
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  background-attachment: fixed;

  @media only screen and (max-width: 768px) {
    display: block;
    background-size: cover;
    background-attachment: scroll;
  }
`;

function Rudolf() {
  return (
    <RudolfContainer>
      <RudolfDiv>
        <Nav />
      </RudolfDiv>
    </RudolfContainer>
  );
}

export default Rudolf;
