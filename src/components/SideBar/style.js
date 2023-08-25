import { FaTimes } from "react-icons/fa";
import { styled } from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    position: fixed;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 340px;
    border-right: 1px solid #fff;
    box-shadow: 0 0 4px 4px rgba(0 ,0 ,0 ,0.25);
    left: ${ props => props.sidebar ? '0' : '-100%'};
    animation: showSideBar .4s;
    z-index: 2;
    
`
export const ContainerContent = styled.div`
    background-color: red;
    z-index: 2;

`
export const Close = styled(FaTimes)`
    position: fixed;
    color: #0375B4;
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
    margin-top: 70px;
    text-align: center;
    justify-content: center;
    align-items: center;
    

    img{
        display: flex;
        left: 38%;
        right: 50%;
        bottom: -100px;
        position: absolute;
        width: 80px;
    }

`
