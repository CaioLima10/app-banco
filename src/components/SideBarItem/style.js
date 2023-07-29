import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    color: #ededed;
    padding: 10px;
    cursor: pointer;
    margin: 0 15px 20px;

    text-decoration: none;

    > svg{
        margin: 0 20px;
    }

    &:hover{
        background: #000000;  
        background: -webkit-linear-gradient(to right, #e74c3c, #000000); 
        background: linear-gradient(to right, #e74c3c, #000000); 

    }

`