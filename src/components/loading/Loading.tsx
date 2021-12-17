import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const santaFade = keyframes`
	0% {
		transform : translateY(100%);
	}
	100% {
		transform : none;
	}
`;

const textFade = keyframes`
	0% {
		transform : translateY(100%);
	}
	100% {
		transform : none;
	}
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadingDiv = styled.div`
  text-align: center;
  h2 {
    animation: ${textFade} 1s ease-in-out;
  }
`;

const LoadingSantaDiv = styled.div`
  overflow: hidden;
`;

const LoadingSanta = styled.div`
  background-image: url('assets/img/santa-icon.svg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 200px;
  animation: ${santaFade} 1s ease-in-out;
`;

function Loading() {
  const history = useHistory();

    useEffect(() => {
      setTimeout(() => history.push('/Santa'), 2000);
    }, [history]);

  return (
    <Flex>
      <LoadingDiv>
        <LoadingSantaDiv>
          <LoadingSanta />
        </LoadingSantaDiv>
        <h2>MERRY CHRISTMAS</h2>
      </LoadingDiv>
    </Flex>
  );
}

export default Loading;
