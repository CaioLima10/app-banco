import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { styled } from "styled-components";


export const Section = styled.section`

  @media (max-width: 1280px){
    display: flex;
    flex-direction: column;
  }
`

export const UserName = styled.div`
  width: 76%;
  background-color: #fff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);

  #number{
    display: flex;
    }

  p{
    font-size: 32px;
    line-height: 1px;
  }

`

export const Container = styled.div`
    border-radius: 8px;
    width: 60%;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    display: inline-flex; 
  p{
    margin-top: 5px;
    margin-bottom: 5px;
  }


  @media (max-width: 1280px){
    margin-top: 40px;
    width: 600px;
    }
    @media (max-width: 630px){
    width: 450px;
    }
    @media (max-width: 530px){
    width: 350px;
    }
  `


export const Form = styled.form`
  width: 500px;
  margin: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  background-color: #D2D2D2;
  border-radius: 6px;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);

  small{
    width: 84%;
    padding: 6px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    background-color: #FF3B3F99;
  }

  gap: 10px;


  label {
    font-weight: bold;
    font-size: 14px;
    padding: 6px;
  }

  p{
    display: flex;
    margin: auto;
    width: 415px;
    margin-bottom: 5px ;
    color: #3B3B3B;
  }

  .input-price {
    background-color: #F3F3F3;
    height: 110px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: #0375B4;
    margin: auto;
    display: flex;
  }

  .input-price::placeholder{
    color: #0375B4;
    font-size: 30px;
    text-align: center;
    margin: auto;

  }

  .input-price:focus{
    border: 2px solid #007bff;

  }

  .container-value{
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  .input-price{
    width: 84%;
  }

  .input-name{
    width: 84%;

  }
  
  .price{
    font-size: 14px;
  }

  textarea{
    width: 84%;
    resize: none;
    padding: 12px;
    outline: none;
    border: none;
    background-color: #F3F3F3;
    border: 1px solid #ccc;


  }

  textarea:focus{
    border: 2px solid #007bff;

  }

  .container-input{
      width: 417px;  
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin: auto;
    }


    .info-select , 
    .info-select-two,
    .-optiontitleal{
      width: 417px;  
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin: auto;
      font-size: 14px;

  }
  .info-select-two ,
  .title-optional{
    color: #3B3B3B;
  }

  .title-optional{
    margin-top: 5px;
    margin-bottom: 5px;
  }
  select{
    display: flex;
    width: 164px;
    height: 40px;
    justify-content: flex-start;
    background-color: #F3F3F3;
    border: none;

    
  }
  .input-select{
    display:flex;
    height: 40px;
    width: 244px;
    font-size: 18px;
    margin-left: 10px;
    padding-left: 10px;
    background-color: #F3F3F3;
    border: none;

  }

  .input-select::placeholder{
    font-size: 14px;
  }
  button{
    width: 84%;
    padding: 12px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  .icon-fill{
    display: flex; 
    padding-right: 5px;
    font-size: 16px;
  }

  .error-message{
      width: 84%;
      padding: 6px;
      font-size: 14px;
      background-color: #FF3B3F99;
      color: #000;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: auto;
    }

  @media (max-width: 1280px){
      width: 500px;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: auto;

    .input-price{
      width: 350px;
      }


    p{
      width: 350px;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: auto;
    }
    .info-select , 
    .info-select-two,
    .-optiontitleal{
      width: 350px;
    }

    select{
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: auto;
    }

    button{
      width: 100%;
    }
  }

  @media (max-width: 560px){
    width: 350px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    
      p{
        width: 260px;
      }
      .info-select , .info-select-two{
        width: 300px;
      }
      select{
        width: 30%;
      }
      .input-price{
        width: 300px;
      }
      .container-input{
        width: 340px;
      }
      .input-select{
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        margin: auto;
        width:65%;
      }
    }
`;

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
  min-height: 80px;
  max-height: 495px;
  width: 500px;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);
  border-radius: 5px;
  overflow-x: hidden;
  background-color: #D2D2D2;
  scrollbar-width: thin; 

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
    width: 460px;
    height: 80px;
    border-radius: 5px;
    margin: auto;
    margin-top: 20px;
    position: relative;
  }

  .title-extract {
    display: flex;
    width: 84%;
    padding-top: 30px;
    padding-bottom: 10px;
    text-align: center;
    align-items: center;
    justify-content: flex-start;
    margin: auto;
    color: #3B3B3B;
  }

  .icon-container {
    position: absolute;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 30px;
    padding: 4.5px;
    left: 4px;
    background-color: #D5D5D5;
    border-radius: 50%;
    color: #3B3B3B;
  }

  .name {
    display: flex;
    font-weight: 700;
    font-size: 14px;
  }
  .name-number {
    display: flex;
    justify-content: space-between;
  }
  .number {
    color: #007bff;
  }

  .type-date {
    display: flex;
    justify-content: space-between;
    color: #3B3B3B;
    margin-top: 5px;
  }
  .title-type {
    font-size: 14px;
  }

  .date {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: flex-end;
  }
  .dados {
    margin-top: 6px;
    color: #3B3B3B;
    font-size: 12px;
  }
  .describe {
    color: #3B3B3B;
    word-break: break-word;
    margin-bottom: 5px;
  }

  span,
  small {
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
    margin: auto;
    width: 340px;
    height: 1px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 1280px) {
    width: 500px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  @media (max-width: 630px){
    width: 450px;

  }
  @media (max-width: 560px){
    width: 350px;

    .container-info {
      width: 400px;
    }
    small, .title-type {
      font-size: 12px;
      display: flex;
    }
    .name-number{
      width: 380px;
      font-size: 12px;
    }

    .dados {
      margin-top: 10px;
    }
    .describe {
      margin-top: 2px;
    }

  }
`;
