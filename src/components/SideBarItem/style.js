import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #000;
    border-radius: 5px;
    padding: 18px;
    left: ${ props => props.sidebar ? '0' : '-100%'};
    animation: showSideBar .4s;
    cursor: pointer;
    margin: 10px 6px 8px;
    width: 328px;
    
    &:hover{
        background-color: #AED8EF99;
    }
    &:active{
        border-bottom: 1px solid #03756999;
    }
    
    > svg{
        margin: 0 20px;
        
    }

`

export const StyledRouterLink = styled(Link)`
    text-decoration: none;
    font-weight: 700;
`