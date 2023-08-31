import { styled } from "styled-components";

export const ContainerOpen = styled.div`
    width: 92%;
    display: flex;
    text-align: center;
    justify-content: flex-end;
    align-items: center;

    #title-balance{
        display: flex;
        flex-direction: column;
        color:#fff;
    }
    
    #number-open{
        display: flex;
        flex-direction: column;
        color: #FF9900;
        font-size: 26px;
    }

    #number-hide{
        font-size: 26px;
    }

    .btn__open__hide{
        border-radius: 20px;
        cursor: pointer;
        height: 28px;
        width: 30px;
        font-size: 26px;
        color: #fff;
    }

    .number__open__hide{
        width: 140px;
        display: flex;
        flex-direction: column;

    }
`
