import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Nav from '../components/nav/Nav';
import Scammer from '../components/nav/Scammer';
import { RootState } from '../reducer';
import { Container, PageDiv } from '../styles/styles';

function Rudolf() {
  const [santaImg, setSantaImg] = useState('/assets/img/rudolf.jpg');
  const santaMoney = useSelector(
    (state: RootState) => state.giveMoneyReducer.money
  );

  useEffect(() => {
    if (santaMoney < 3) {
      setSantaImg('/assets/img/rudolf.jpg');
    } else {
      setSantaImg('assets/img/GAMBLING.jpg');
    }
  }, [santaMoney]);
  return (
    <Container>
      <PageDiv background={santaImg}>
        {santaMoney < 3 ? <Nav /> : <Scammer />}
      </PageDiv>
    </Container>
  );
}

export default Rudolf;
