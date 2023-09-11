import { styled } from "styled-components";

export const Section = styled.section`
  width: 100%;

  @media screen and (max-width: 970px) {
    & {
      display: flex;
      flex-direction: column;
    }
  }

`;

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  margin-top: 45px;
  overflow-y: hidden;

  @media screen and (max-width: 970px) {
    & {
      flex-direction: column;
      margin-bottom: 40px ;
    }
  }
  @media screen and (max-width: 580px) {
    & {
      width: 400px;
      margin: 50px auto;
      overflow: hidden;
    }
  }
  @media screen and (max-width: 430px) {
    & {
      width: 350px;
      margin: 25px auto;
    }
  }
`;

export const ContainerTitle = styled.div`
  height: 450px;
  background-color: #fff;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  position: relative;
  display: flex;
  overflow: hidden;
  transition: width 0.8s ease-in-out;
  width: ${(props) => (props.isOpen ? "400px" : "0")};

  .hero {
    position: absolute;
    bottom: 25px;
    right: 40px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 110px;
    height: 110px;
  }

  @media screen and (max-width: 970px) {
    & {
      margin-top: 24px;
      width: 550px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom-left-radius: 0;
      display: flex;
      flex-direction: column;
      transition: height 0.8s ease-in-out;
      height: ${(props) => (props.isOpen ? "400px" : "0")};
    }
  }
  @media screen and (max-width: 580px) {
    & {
      width: 400px;
      margin: auto;
    }
  }
  @media screen and (max-width: 430px) {
    & {
      width: 350px;
      margin: auto;
    }
    .hero{
      right: 5px;
    }
  }
`;

export const Content = styled.div`
  position: fixed;
  width: 370px;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 30px;
    margin-top: 15px;
    color: #d08009;
  }

  h3 {
    font-size: 26px;
    margin-top: 5px;
  }

  H2 {
    margin-top: 10px;
    color: #0375b4;
  }
  p {
    margin-top: 15px;
    font-weight: 600;
  }

  span {
    color: #0375b4;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  position: absolute;
  margin-left: -25px;
  top: 34%;

  background-color: #272521;
  border-bottom: 2px solid #ff9900;
  border-top: 2px solid #ff9900;
  border-left: 2px solid #ff9900;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  height: 150px;
  width: 25px;

  > svg {
    color: #ff9900;
    font-size: 18px;
  }

  @media screen and (max-width: 970px) {
    & {
     display: none;
    }
  }

`;

export const Container = styled.div`
  width: 550px;
  height: 450px;
  background-color: #272521;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  z-index: 2;
  position: relative;

  .container-cover {
    height: 450px;
    width: 180px;
  }

  .img-bottom {
    position: absolute;
    top: 0;
    width: 200px;
  }
`;
