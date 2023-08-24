import { styled } from "styled-components";



export const ContainerOpen = styled.div`
    width: 83.5%;
    display: flex;
    text-align: center;
    align-items: center ;
    justify-content: flex-start;
    margin: 5px auto;

    #number-open{
        display: flex;
        color: #FFFFFF;
        font-size: 26px;
        background-color: #0375B4;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.20);
    }

    #number-hide{
        font-size: 26px;
    }

    .btn__open__hide{
        display: flex;
        border-radius: 20px;
        cursor: pointer;
        height: 28px;
        width: 30px;
        font-size: 26px;

    }

    .number__open__hide{
        width: 160px;
        margin-right: 5px;
    }
`
