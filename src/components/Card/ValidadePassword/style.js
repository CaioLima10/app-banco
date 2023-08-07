import { FaCheck, FaTimes } from "react-icons/fa";
import styled from "styled-components"

export const Check = styled(FaCheck)`
    display: flex;
    opacity: 1;
    font-size: 14px;
    margin-right: 5px;
    color: green;

`

export const Times = styled(FaTimes)`
    display: flex;
    opacity: 0.5;
    font-size: 14px;
    margin-right: 5px;
    color: red;
    `

export const Container = styled.div`

div{
    display: inline-flex;
}


.btn-is-hidden {
    display: flex;
    margin-top: 1px;
    height: 40px;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 10%;
    background-color: #007bff;
    border: none;
    cursor: pointer;
    font-size: 14px;
    color: #fff;
    border-top-left-radius: 0 ;
    border-bottom-left-radius: 0 ;
}

.input-password{
  border-top-right-radius: 0 ;
  border-bottom-right-radius: 0 ;
}

.input-is-hidden {
    width: 520px;
    display: flex;
    border-radius: 4px;
}

    .container-isValid{
        display: flex;
        flex-direction: column;
        border-radius: 4px;

        margin-top: 10px;
        margin-bottom: 5px;
        padding: 10px 5px;
        background-color: #AED8EF;
    }
    p{
        display: flex;
        font-size: 14px;
        margin-top: 4px;
    }
`