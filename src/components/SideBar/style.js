import { FaTimes } from "react-icons/fa";
import { styled } from "styled-components";

export const Container = styled.div`
    background-color: #272521;
    position: fixed;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 340px;
    box-shadow: 0 0 4px 4px rgba(0 ,0 ,0 ,0.25);
    left: ${ props => props.sidebar ? '0' : '-100%'};
    animation: showSideBar .4s;
    z-index: 996;

`
export const ContainerContent = styled.div`
    z-index: 2;

`
export const Close = styled(FaTimes)`
    position: fixed;
    color: #FF9900;
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
    position: relative;
    

    img{
        display: flex;
        left: 38%;
        right: 50%;
        bottom: -60px;
        position: absolute;
        width: 80px;
    }
`


