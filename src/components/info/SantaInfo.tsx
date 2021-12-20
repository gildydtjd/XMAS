import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SantaInfoContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const SantaMoneyDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px 0px;
  h2 {
    padding: 3%;
    font-size: 40px;
    color: #ffffff;
  }
  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 22px;
    }
  }
`;

interface Container {
  background: string;
}

const SantaInfoDiv = styled.div<Container>`
  height: 100vh;
  width: 100%;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 80px;
    color: #fff;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 20px;
      padding: 10px;
    }
  }
`;

const SantaGiveMoneyBtn = styled.button`
  border: 0.5px solid #c9c9c9;
  border-radius: 5px;
  width: 100px;
  height: 50px;
  font-size: 20px;
  cursor: pointer;
  :hover {
    color: #ffffff;
    background-color: #ff6e91;
  }
  @media only screen and (max-width: 768px) {
  }
`;

function SantaInfo() {
  const [money, setMoney] = useState(1);
  const [santaImg, setSantaImg] = useState('/assets/img/santa-info4.jpg');
  const GiveMoney = () => {
    setMoney(money + 1);
  };

  useEffect(() => {
    if (money > 4) {
      setSantaImg('assets/img/santa-info5.jpg');
    }
  }, [money]);

  return (
    <SantaInfoContainer>
      <SantaMoneyDiv>
        <h2>현재 후원금 : {money}억</h2>
      </SantaMoneyDiv>
      {money < 5 ? (
        <SantaInfoDiv background={santaImg}>
          <h2>
            산타도 사람입니다 <br />
            <h2>산타에게 후원금을 보내주세요</h2>
            <SantaGiveMoneyBtn onClick={GiveMoney}>GIVE</SantaGiveMoneyBtn>
          </h2>
        </SantaInfoDiv>
      ) : (
        <SantaInfoDiv background={santaImg}></SantaInfoDiv>
      )}
    </SantaInfoContainer>
  );
}

export default SantaInfo;
