import React from 'react';
import styled from 'styled-components';
const SleighInfoDiv = styled.div`
  width: 80%;
  height: 100vh;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
function SleighInfo() {
  return <SleighInfoDiv></SleighInfoDiv>;
}

export default SleighInfo;
