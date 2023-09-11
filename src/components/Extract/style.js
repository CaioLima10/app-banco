import { CgCreditCard } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ImFilesEmpty } from "react-icons/im"
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
  min-height: 300px;
  width: 800px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);
  border-radius: 5px;
  background-color: #272521;

  .container-extract-empty{
    margin-top: 40px;
  }

  h3{
    color: #D9D9D9;
    font-size: 30px;
    opacity: 0.2;
  }


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
    background-color: #3D3B37;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
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
    color: #fff;
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
    background-color: #D9D9D9;
    border-radius: 50%;
    color: #222222;
  }

  .name {
    display: flex;
    font-weight: 300;
    color: #FF9900;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .name__number {
    display: flex;
    justify-content: space-between;
  }

  .number{
    display: flex;
    color: #fc1313;
    font-size: 22px;
    font-weight: 500;
    background-color: #D9D9D9;
    border-bottom-left-radius: 16px;
    justify-content: flex-end;
    padding-right: 5px;
   
    width: 93%;

  }

  .type-date {
    display: flex;
    justify-content: space-between;
    color: #D9D9D9;
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
    color: #D9D9D9;
    font-size: 14px;
  }
  .describe {
    color: #D9D9D9;
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

    .dados {
      margin-top: 10px;
      font-size: 14px;
    }

    .describe{
      font-size: 14px;
    }
  }
`;

export const FilesEmpty = styled(ImFilesEmpty)`
  color: #D9D9D9;
  font-size: 70px;
  opacity: 0.2;

`

export const CreditCard = styled(CgCreditCard)`
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:auto;
`
