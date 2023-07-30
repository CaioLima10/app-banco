import { styled } from "styled-components"
import {FaBars} from "react-icons/fa"

export const Container = styled.header`
    height: 60px;
    display: flex;
    background: #000000;  
    background: -webkit-linear-gradient(to right, #e74c3c, #000000); 
    background: linear-gradient(to right, #e74c3c, #000000); 

`

export const Hamburguer = styled(FaBars)`
    color: #ededed;
    width: 20px;
    height: 30px;
    margin-top: 14px;
    margin-left: 32px;
    cursor: pointer;
`