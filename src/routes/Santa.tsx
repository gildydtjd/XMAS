import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { giveMoneySanta } from '../action/giveMoney';
import SantaInfo from '../components/info/SantaInfo';
import Nav from '../components/nav/Nav';
import Scammer from '../components/nav/Scammer';
import { RootState } from '../reducer';
import { Container, PageDiv } from '../styles/styles';

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
    <Container>
      <PageDiv background={santaImg}>
        {santaMoney < 3 ? <Nav /> : <Scammer />}
      </PageDiv>
      <SantaInfo money={santaMoney} GiveMoney={MoneyUp} />
    </Container>
  );
}

export default Santa;
