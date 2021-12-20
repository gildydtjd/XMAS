import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// 타입
interface Container {
  background: string;
}

type MoneyProps = {
  money: number;
  GiveMoney: () => void;
};

// 스타일
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
  .money1 {
    padding: 3% 1%;
    font-size: 40px;
    color: #ffffff;
  }
  .money2 {
    font-size: 40px;
    color: #ff6e91;
  }
  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 22px;
    }
  }
`;

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
  border: 4px solid #ff6e91;
  border-radius: 5px;
  width: 200px;
  height: 100px;
  font-size: 40px;
  font-weight: 700;
  cursor: pointer;
  :hover {
    color: #ffffff;
    background-color: #ff6e91;
  }
  @media only screen and (max-width: 768px) {
  }
`;

function SantaInfo({ money, GiveMoney }: MoneyProps) {
  const [santaImg, setSantaImg] = useState('/assets/img/santa-info4.jpg');

  useEffect(() => {
    if (money < 3) {
      setSantaImg('assets/img/santa-info4.jpg');
    } else {
      setSantaImg('assets/img/santa-info5.jpg');
    }
  }, [money]);

  return (
    <SantaInfoContainer>
      {money < 3 ? (
        <>
          <SantaMoneyDiv>
            <h2 className="money1">현재 후원금 :</h2>
            <h2 className="money2">{money}억</h2>
          </SantaMoneyDiv>
          <SantaInfoDiv background={santaImg}>
            <h2>
              산타도 사람입니다 <br />
              <h2>산타에게 후원금을 보내주세요</h2>
              <SantaGiveMoneyBtn onClick={GiveMoney}>GIVE</SantaGiveMoneyBtn>
            </h2>
          </SantaInfoDiv>
        </>
      ) : (
        <>
          <SantaInfoDiv background={santaImg}>
            <h2 style={{ color: '#ff6e91' }}>
              피싱 사기 피해 <br />
              <h2 style={{ fontSize: '45px' }}>예방만이 최선의 방법입니다</h2>
            </h2>
          </SantaInfoDiv>
        </>
      )}
    </SantaInfoContainer>
  );
}

export default SantaInfo;
