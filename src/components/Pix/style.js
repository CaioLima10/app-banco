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
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    display: inline-flex; 
  p{
    margin-top: 5px;
    margin-bottom: 5px;
  }
`

export const Form = styled.form`
  width: 800px;
  margin: 26px;
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
  flex-direction: column;
  background-color: #D2D2D2;
  border-radius: 6px;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);
  margin-top: 40px;

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
    width: 84%;
    margin-bottom: 5px ;
    color: #3B3B3B;
  }

  .input-price {
    background-color: #F3F3F3;
    height: 80px;
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
      width: 84%;  
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin: auto;
    }


    .info-select , 
    .info-select-two,
    .-optiontitleal{
      width: 84%;   
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin: auto;
      font-size: 14px;

  }
  .info-select-two ,
  .title-optional{
    color: #3B3B3B;
    width: 84%;

  }

  .title-optional{
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 14px;

    width: 84%;   
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: auto;

  }
  select{
    display: flex;
    width: 250px;
    height: 40px;
    justify-content: flex-start;
    background-color: #F3F3F3;
    border: none;

    
  }
  .input-select{
    display:flex;
    height: 40px;
    width: 450px;
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
    font-size: 12px;
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


  @media (max-width: 740px){
    margin-top: 50px;

  .input-select{
    display: flex;

    margin:0 5px auto;
    width: 100%;
  }

}
`