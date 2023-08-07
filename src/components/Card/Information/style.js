import { RiInformationFill } from "react-icons/ri";
import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const Button = styled.button`
    width: 100%;
    position: absolute;
    max-width: 40px;
    right: -18px;
    padding: 1px;
    font-size: 22px;
    background: none;
    border: none;
    cursor: pointer;

`

export const InformationFill = styled(RiInformationFill)`
    color: #A9A9A9;
`


export const ContainerModal = styled.div`
    position: absolute;
    width: 378px;
    height: 60px;
    top: -5.2rem;
    right: 0;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.10);
    border: 1px solid #FF3B3F;
    z-index: 2;
    padding: 7px;
    transition: all 1s ease-in-out; 

    `


export const DescribeInformation = styled.span`
    font-size: 12px;

`
