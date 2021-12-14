import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const HomeDiv = styled.div`
  background-image: url('/assets/img/back.jpg');
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

function Home() {
  return (
    <HomeDiv>
      <Outlet />
    </HomeDiv>
  );
}

export default Home;
