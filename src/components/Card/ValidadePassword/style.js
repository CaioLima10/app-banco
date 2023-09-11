import { FaCheck, FaTimes } from "react-icons/fa";
import styled from "styled-components"

export const Check = styled(FaCheck)`
    display: flex;
    opacity: 1;
    font-size: 14px;
    margin-right: 5px;
    color: #7FFF09;
`

export const Times = styled(FaTimes)`
    display: flex;
    opacity: 0.5;
    font-size: 16px;
    margin-right: 5px;
    color: #F80000;
    `

export const Container = styled.div`

div{
    display: inline-flex;
}

.btn-is-hidden {
    display: flex;
    margin-top: 1px;
    height: 45px;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 10%;
    background-color: #007bff;
    border: 2px solid #fff;
    cursor: pointer;
    font-size: 18px;
    color: #fff;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding: 6px;
}

.input-password{
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-is-hidden {
    width: 410px;
    display: flex;
    border-radius: 4px;
}

    .container-isValid{
        display: flex;
        flex-direction: column;
        margin: auto;
        border-radius: 4px;
        width: 81%;
        margin-bottom: 10px;
        padding: 10px 5px;
        background-color: #3D3B37;
        color: #FF9900;
    }
    p{
        display: flex;
        font-size: 16px;
        margin-top: 4px;
        color: #FFFFFF;
    }

    @media (max-width: 1260px) {
      .container-isValid{
        width: 445px;

        margin: 5px 5px 0 0 auto;
      }
    }

    @media (max-width: 926px) {
      .input-is-hidden {
        width: 268px;
      }
      .container-isValid{
        width: 300px;

        margin: 5px 5px 0 0 auto;
      }
      p{
        padding-left: 2px;
        width: 268px;
      }
    }

`