import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { giveMoneySanta } from '../action/giveMoney';
import SantaInfo from '../components/info/SantaInfo';
import Nav from '../components/nav/Nav';
import Scammer from '../components/nav/Scammer';
import { RootState } from '../reducer';
// 타입
interface Container {
  background: string;
}

// 스타일
const SantaContainer = styled.div``;
const SantaDiv = styled.div<Container>`
  background-image: url(${(props) => props.background});
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

function Santa() {
  const [santaImg, setSantaImg] = useState('/assets/img/santa.jpg');
  const santaMoney = useSelector(
    (state: RootState) => state.giveMoneyReducer.money
  );
  const dispatch = useDispatch();
  const MoneyUp = () => {
    dispatch(giveMoneySanta());
  };

  useEffect(() => {
    if (santaMoney < 3) {
      setSantaImg('assets/img/santa.jpg');
    } else {
      setSantaImg('assets/img/santa-info7.jpg');
    }
  }, [santaMoney]);

  return (
    <SantaContainer>
      <SantaDiv background={santaImg}>
        {santaMoney < 3 ? <Nav /> : <Scammer />}
      </SantaDiv>
      <SantaInfo money={santaMoney} GiveMoney={MoneyUp} />
    </SantaContainer>
  );
}

export default Santa;
