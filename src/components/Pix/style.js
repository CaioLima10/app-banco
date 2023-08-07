import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { styled } from "styled-components";

const mobileBreakpointMax = '868px';
const mobileBreakpointMin = '370px';


export const UserName = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: auto;
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

  @media screen and (max-width: ${mobileBreakpointMax}) and (min-width: ${mobileBreakpointMin}) {
    width: 100%;
  }

`

export const Container = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  align-items: flex-start;
  justify-content: center;

  p{
    margin-top: 5px;
    margin-bottom: 5px;
  }

  @media screen and (max-width: ${mobileBreakpointMax}) and (min-width: ${mobileBreakpointMin}) {
    flex-direction: column;
    align-items: center;
  }
  `

export const ContainerHidden = styled.div`
    width: 100%;
    text-align: center;
    align-items: flex-start;
    justify-content: center;
    padding: 20px;
    

    span{
      height: 100px;
      border-radius: 5px;
      background-color: #ECECEC;
      align-items: flex-start;
      color: #0375B4;
      display: flex;
      flex-direction: column;
      padding: 24px;
      padding-left: 35px;
      width: 100%;
      font-size: 18px;
      box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  }

  .container-hide{
    display: flex;
    position: relative;

  }
  p{
    font-size: 20px;
    color: #3B3B3B;
  }

  button{
    display: flex;

    background: none;
    border: none;
    font-size: 22px;
    cursor: pointer;
    left: 80px;
    position: absolute;
  }

  @media screen and (max-width: ${mobileBreakpointMax}) and (min-width: ${mobileBreakpointMin}) {
    align-items: center;
  }
`

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
  margin: 20px;

  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

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

  .container-input{
    margin-left: 35px;
  }

  label {
    font-weight: bold;
    font-size: 14px;
    padding: 6px;
  }

  input {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
  }

  input:focus{
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
    border: 1px solid #ccc;
    resize: none;
    padding: 12px;
    outline: none;
  }

  textarea:focus{
    border: 2px solid #007bff;

  }

  .container-input{
      width: 240px;   
      display:flex;
  }

  button{
    width: 84%;
    padding: 12px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  @media screen and (max-width: ${mobileBreakpointMax}) and (min-width: ${mobileBreakpointMin}) {
    max-width: 100%;
    padding: 10px;
  }
`;

export const ContaineIconArrowDown = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    min-height: 438px;
    margin: 20px;
    background-color: #FFF;
    margin-top: 20px;
    transition: max-height 0.3s ease;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

    @media screen and (max-width: ${mobileBreakpointMax}) and (min-width: ${mobileBreakpointMin}) {
    width: 100%;
    }

`


export const ArrowDown = styled(IoIosArrowDown)`
  font-size: 22px;
  color: #FFFFFF;

`

export const ArrowUp = styled(IoIosArrowUp)`
  font-size: 22px;
  color: #FFFFFF;
`
export const ContainerExtract = styled.div`
display: flex;
flex-direction: column;
background-color: #ECECEC;
min-height: 275px;
border-radius: 5px;
width: 92%;
margin: auto;
margin-bottom: 20px;

  .container-info{
    display: flex;
    flex-direction: column;
    width: 460px;
    height: 80px;
    border-radius: 5px;
    margin: auto;
    margin-top: 20px;
    position: relative;
  }

  .title-extract{
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

  .icon-container{
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

  .name{
    display: flex;
    font-weight: 700;
    font-size: 14px;
  }
  .name-number{
    display: flex;
    justify-content: space-between;
  }
  .number{
    color: #007bff;
  }

  .type-date{
    display: flex;
    justify-content: space-between;
    color: #3B3B3B;
    margin-top: 5px;
  }
  .title-type{
    font-size: 14px;
  }

  .date{
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: flex-end
  }
  .dados{
    margin-top: 6px;
    color: #3B3B3B;
    font-size: 12px;
  }
  .describe{
    color: #3B3B3B;
    word-break: break-word;
    margin-bottom: 5px;
  }

      span , small{
        padding-left: 40px;
        padding-right: 40px;
        display: flex;
        word-break: break-word;
      }

      .border-info{
        margin-top: 10px;
        text-align: center;
        align-items: center;
        justify-content: center;
        margin: auto;

        width: 340px;
        height: 1px;
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.6);
      }

      @media screen and (max-width: ${mobileBreakpointMax}) and (min-width: ${mobileBreakpointMin}) {
      width: 100%;
      }
`