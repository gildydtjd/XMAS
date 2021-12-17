import React from 'react';
import styled from 'styled-components';
const GiftInfoDiv = styled.div`
  width: 80%;
  height: 100vh;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
function GiftInfo() {
  return <GiftInfoDiv></GiftInfoDiv>;
}

export default GiftInfo;
