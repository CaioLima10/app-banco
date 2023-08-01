import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  p{
    margin-top: 5px;
    margin-bottom: 5px;
  }
  `;

export const ContainerHidden = styled.div`
    width: 100px;
    text-align: center;
    align-items: center;
    justify-content: center;


    
    span{
      background-color: #fff;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      padding: 6px;
      width: 100%;
      font-size: 14px;
      box-shadow: 0px 8px 6px rgba(0, 0, 0, 0.20);
  }


  button{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 140px;
    background: none;
    border: none;
    font-size: 22px;
    cursor: pointer;
    position: absolute;
  }
`

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 



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
  }

  .container-value{
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  .input-price{
    width: 84%;
  }
  textarea{
    width: 84%;
    border: 1px solid #ccc;
    resize: none;
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
`;

export const TitleExtract = styled.h1`
    position: fixed;
    right: 9.4rem;
    top: 3.8rem;  
    font-size: 26px;
`

export const ContaineIconArrowDown = styled.div`
    position: fixed;
    right: 8rem;
    top: 8.7rem;  
    display: flex;
    width: 250px;
    max-height: ${props => (props.open ? "0px" : "360px")};
    background-color: #F5F2C3;
    margin-bottom: 30px;
    overflow-y: scroll;
    transition: max-height 0.3s ease;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);


        &::-webkit-scrollbar {
          width: 6px;               
        }

        &::-webkit-scrollbar-track {
          background: #f7b73399;       
        }

        &::-webkit-scrollbar-thumb {
          background-color: #222222;
        }
`


export const ButtonIconArrowDown = styled.button`
    position: fixed;
    right: 8rem;
    top: 7rem;
    width: 250px;
    max-width: 100%;
    border: none;
    cursor: pointer;
    background-color: #007bff;
    box-shadow: 0px 8px 6px rgba(0, 0, 0, 0.10);



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
padding: 30px;

      span , small{
        display: flex;
        padding: 6px;
        text-align: center;
        align-items: center;
        justify-content: center;
        word-break: break-word;

        
      }

`