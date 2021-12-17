import styled from 'styled-components';
import Header from '../components/header/Header';
import HomeInfo from '../components/info/HomeInfo';
import Nav from '../components/nav/Nav';

const HomeDiv = styled.div`
  position: absolute;
  width: 100%;
  background-image: url('/assets/img/santa.jpg');
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Home() {
  return (
    <HomeDiv>
      <Header />
      <Nav />
      <HomeInfo />
    </HomeDiv>
  );
}

export default Home;
