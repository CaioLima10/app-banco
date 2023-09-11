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
    display: inline-flex; 
  p{
    margin-top: 5px;
    margin-bottom: 5px;
  }
`

export const Form = styled.form`
  width: 800px;
  padding-top: 27px;
  padding-bottom: 25px;
  display: flex;
  flex-direction: column;
  background-color: #272521;
  border-radius: 6px;
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
    width: 84%;
    margin-bottom: 5px ;
    color: #FFFFFF;
  }

  .input-price {
    background-color: #3D3B37;
    height: 80px;
    border-radius: 4px;
    border: none;
    outline: none;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: #FF9900;
    margin: auto;
    display: flex;
  }

  .input-price::placeholder{
    color: #FF9900;
    font-size: 30px;
    text-align: center;
    margin: auto;
  }

  .input-price:focus{
    border: 2px solid #FF9900;
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
  color: #FFFFFF;
  }


  .container-input{
      width: 84%;  
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin: auto;
    }


    .info-select{
      width: 84%;   
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin: auto;
      font-size: 16px;
      color: #FFFFFF;
      
  }
  .info-select-two , 
  .title-optional{
    color: #FFFFFF;
    width: 84%;
    font-size: 14px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: auto;
    
  }
  
  select{
    display: flex;
    width: 270px;
    height: 40px;
    color: #FF9900;
    justify-content: flex-start;
    background-color: #3D3B37;
    border: none;
  }


  .input-select{
    display:flex;
    height: 40px;
    width: 450px;
    font-size: 18px;
    margin-left: 10px;
    padding-left: 10px;
    margin-bottom: 10px;
    background-color: #3D3B37;
    color: #FF9900;
    border: none;
  }

  .input-select::placeholder{
    font-size: 14px;
    color: #FF9900;
  }

  textarea{
    width: 84%;
    resize: none;
    padding: 12px;
    margin-top: 5px;
    font-size: 16px;
    color: #FF9900;
    outline: none;
    border: none;
    background-color: #3D3B37;
  }

  textarea:focus{
    border: 2px solid #FF9900;
  }

  textarea::placeholder{
    color: #FF9900;
  }

  button{
    width: 84%;
    padding: 12px;
    background: rgb(255,214,0);
    background: linear-gradient(90deg, rgba(255,214,0,1) 0%, rgba(255,153,0,1) 100%);
    border: 2px solid #FFFFFF;
    color: #111;
    font-size: 16px;
    font-weight: 700;
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

    &{
      width: 90%;
    }

  .input-select{
    display: flex;

    margin:0 5px auto;
    width: 100%;
  }

}
`