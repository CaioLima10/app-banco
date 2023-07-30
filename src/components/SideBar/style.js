import { FaTimes } from "react-icons/fa";
import { styled } from "styled-components";

export const Container = styled.div`
    background: #000000; 

    position: fixed;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 300px;
    left: ${ props => props.sidebar ? '0' : '-100%'};
    animation: showSideBar .4s;
    z-index: 2;

`

export const Close = styled(FaTimes)`
    position: fixed;
    color: #ededed;
    width: 20px;
    height: 30px;
    margin-top: 14px;
    margin-left: 32px;
    cursor: pointer;

    @keyframes showSideBar {
        from{
            opacity: 0;
            width: 0;
        }to{
            opacity: 1;
            width: 300px;
        }
    }

`

export const Content = styled.div`
    position: fixed;
    text-decoration: none;
    margin-top: 100px;


`