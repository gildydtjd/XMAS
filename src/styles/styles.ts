import styled from 'styled-components';
interface ContainerImg {
  background: string;
}
export const Container = styled.div``;
export const PageDiv = styled.div<ContainerImg>`
  background-image: url(${(props) => props.background});
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  @media only screen and (max-width: 768px) {
    display: block;
    background-size: cover;
    background-attachment: scroll;
  }
`;

export const InfoDiv = styled.div`
  height: 100vh;
  width: 100%;
  @media only screen and (max-width: 768px) {
  }
`;
