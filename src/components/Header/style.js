import { styled } from "styled-components"
import {FaBars} from "react-icons/fa"

export const Container = styled.header`
    height: 60px;
    display: flex;
    background-color: #0A9AE9;

`
export const Hamburguer = styled(FaBars)`
    color: #ededed;
    width: 20px;
    height: 30px;
    margin-top: 14px;
    margin-left: 32px;
    cursor: pointer;
`