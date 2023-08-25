import { CgCreditCard } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { styled } from "styled-components";

export const Section = styled.section`
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
`

export const ContaineIconArrowDown = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
`

export const ArrowDown = styled(IoIosArrowDown)`
  font-size: 22px;
  color: #FFFFFF;
`

export const ArrowUp = styled(IoIosArrowUp)`
  font-size: 22px;
  color: #FFFFFF;
`

export const ContainerValue = styled.div`
    width: 20%;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    display: inline-flex;

    @media (max-width: 1280px){
      width: 500px;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: auto;
    }
    @media (max-width: 630px){
      width: 450px;
    }

    @media (max-width: 560px){
      width: 350px;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: auto;
    }
`

export const ContainerExtract = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  min-height: 200px;
  width: 800px;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);
  border-radius: 5px;
  background-color: #D2D2D2;


  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #22222299;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 2px;
  }

  .container-info {
    display: flex;
    flex-direction: column;
    width: 600px;
    min-height: 150px;
    padding: 10px;
    border-radius: 5px;
    margin: auto;
    position: relative;
    background-color: #fff;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
  }

  .title-extract {
    display: flex;
    width: 76%;
    padding-top: 30px;
    padding-bottom: 10px;
    text-align: center;
    align-items: center;
    justify-content: flex-start;
    margin: auto;
    color: #3B3B3B;
    font-size: 30px;
  }

  .icon-container {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:auto;
    width: 50px;
    height: 46px;
    top: 8px;
    left: 8px;
    background-color: #D5D5D5;
    border-radius: 50%;
    color: #3B3B3B;
  }

  .name {
    display: flex;
    font-weight: 700;
    font-size: 20px;
  }
  .name__number {
    display: flex;
    justify-content: space-between;
  }
  .number {
    color: #007bff;
    font-size: 20px;
  }

  .type-date {
    display: flex;
    justify-content: space-between;
    color: #3B3B3B;
    margin-top: 5px;
  }
  .title-type {
    font-size: 16px;
  }

  .date {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: flex-end;
    font-size: 16px;
  }
  .dados {
    margin-top: 6px;
    color: #3B3B3B;
    font-size: 16px;
  }
  .describe {
    color: #3B3B3B;
    word-break: break-word;
    margin-bottom: 5px;
  }

  span,
  small {
    font-size: 14px;
    margin-top: 10px;
    padding-left: 40px;
    padding-right: 40px;
    display: flex;
    word-break: break-word;
  }

  .border-info {
    margin-top: 10px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 15px auto;
    width: 340px;
    height: 1px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 880px) {
    width: 640px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  @media (max-width: 680px){
    width: 500px;

    .container-info {
      width: 440px;
      
    }
    small, .title-type {
      font-size: 18px;
    }
    .number{
      font-size: 20px;
      width: 180px;
    }
    
    .dados {
      margin-top: 10px;
    }
    .describe {
      margin-top: 6px;
      font-size: 18px;
    }

  }
  @media (max-width: 550px){
    width: 400px;

    .container-info {
      width: 380px;
    }
    small, .title-type {
      font-size: 16px;
    }
    .number{
      width: 180px;
    }

    .dados {
      margin-top: 10px;
      font-size: 14px;
    }
    .describe {
      margin-top: 8px;
    }
  }
  @media (max-width: 430px){
    width: 350px;

    .container-info {
      width: 330px;
      min-height: 180px;
    }

    .title-type{
      font-size: 14px;
      width: 280px;
    }
    .date {
      font-size: 12px;
      width: 220px;
    }
    .number{
      font-size: 20px;
    }

    .dados {
      margin-top: 10px;
      font-size: 14px;
    }

    .describe{
      font-size: 14px;
    }
  }
`;

export const CreditCard = styled(CgCreditCard)`
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:auto;
`
