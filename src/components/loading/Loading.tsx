import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadingDiv = styled.div`
  text-align: center;
`;

const LoadingSanta = styled.div`
  background-image: url('assets/img/santa-icon.svg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 200px;
`;

function Loading() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => history.push('/Santa'), 2000);
  }, [history]);
  return (
    <Flex>
      <LoadingDiv>
        <LoadingSanta />
        <h2>MERRY CHRISTMAS</h2>
      </LoadingDiv>
    </Flex>
  );
}

export default Loading;
