import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Logo = styled.div`

    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 100%;
    height: 100px;
    flex-direction: column;
    background-color: #0A9AE9;

        img{
            width: 120px;
            height: 60px;
        }

`

export const Section = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    position: fixed;
    background-color: #0A9AE9;
    gap: 20px;



    @media (max-width: 1090px) {
        &{
            text-align: center;
            width: 100%;
            justify-content: center;
            align-items: center;
            margin: auto;
            display: grid;
            grid-template-columns: 50% 1fr;
            position: relative;
            }
        .container-card{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: auto;
            margin-bottom: 40px;
        }

    @media (max-width: 738px) {
        display: flex;
        flex-direction: column;
    }
    }

    .container-card:hover{
        border: 1px solid  #222222;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.1);
    }
    
    .container-card{
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 300px;
        border-radius: 8px;
        background-color: #FFFFFF;

    }
    
    .content , .content-extract{
        width: 100%;
        min-height: 100%;
        border-radius: 8px;

        background-color: #FFFFFF;

        border: none;
        cursor: pointer;
        
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 10px;
    }

    span{
        font-size: 22px;
    }

    .img{
        width: 60px;
    }
`;

export const StyledLink = styled(Link)`
        width: 100%;
        min-height: 100%;
        border-radius: 8px;

        border: none;
        cursor: pointer;
        
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 10px;

        color: #222222;
        text-decoration: none;
    
`
export const StyledIcon = styled.svg`
    font-size: 60px;
    color: #222222;
`
