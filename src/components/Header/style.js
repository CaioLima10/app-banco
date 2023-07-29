import { styled } from "styled-components"
import {FaBars} from "react-icons/fa"

export const Container = styled.header`
    height: 150px;
    display: flex;
    background: #000000;  
    background: -webkit-linear-gradient(to right, #e74c3c, #000000); 
    background: linear-gradient(to right, #e74c3c, #000000); 
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;

`

export const Hamburguer = styled(FaBars)`
    color: #ededed;
    width: 30px;
    height: 30px;
    margin-top: 18px;
    margin-left: 32px;
    cursor: pointer;
`