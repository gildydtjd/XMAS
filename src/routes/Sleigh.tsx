import React from 'react';
import styled from 'styled-components';
import Nav from '../components/nav/Nav';
const SleighContainer = styled.div``;
const SleighDiv = styled.div`
  background-image: url('/assets/img/sleigh2.jpg');
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

function Sleigh() {
  return (
    <SleighContainer>
      <SleighDiv>
        <Nav />
      </SleighDiv>
    </SleighContainer>
  );
}

export default Sleigh;
