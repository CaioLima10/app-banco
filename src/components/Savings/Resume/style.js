import { styled } from "styled-components";

export const ContainerContent = styled.div`
    width: 100%;
    display: flex;
    margin-top: 45px;
    justify-content: center;
    gap: 2px;


`

export const ContainerTotal = styled.div`
    width: 210px;
    height: 130px;
    background-color: #3D3B37;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    position: relative;

    .content-total{
        text-align: center;
    }

    .icon-three-points{
        font-size: 20px;
        color: #FFFFFF;
    }
    span{
        color: #FFFFFF;
        font-size: 26px;
    }
    hr{
        margin-top: 5px;
    }
    p{
        margin-top: 5px;
        color: #FFFFFF;
        font-size: 16px;
    }
    @media screen and (max-width: 580px) {
    & {
      width: 155px;
  }
  }
`

export const ContainerCdi = styled.div`
    min-width: 210px;
    height: 130px;
    background-color: #3D3B37;
    display: inline-flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    z-index: 1;

    span{
        color: #FFFFFF;
        font-size: 26px;
    }
    hr{
        margin-top: 5px;
    }
    p{
        margin-top: 5px;
        color: #FFFFFF;
        font-size: 14px;
    }

    @media screen and (max-width: 580px) {
    & {
      min-width: 155px;
    }

    span{
        color: #FFFFFF;
        font-size: 20px;
    }
  }
`

export const BorderProgressWrapper = styled.div`
  height: 20px;
  width: 100%;
  border-radius: 16px;
  border: 2px solid #fff;
  margin-bottom: 35px;
  position: relative;
  z-index: 1;

  .circle{
    background-color: #FFFFFF;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    position: absolute;
    right: -4px;
    bottom: -5px;
  }

  .children-circle{
    background-color: #3D3B37;
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50px;
    bottom: 3px;
    right: 3px;
  }

  @media screen and (max-width: 580px) {
    & {
    margin: auto;
    max-width: 320px;      
    }
  }
  `;

export const ColoredProgressBar = styled.div`
max-width: 420px;
width: ${(props) => props.style.width || "0"}; 
background-color: ${(props) => props.style.backgroundColor || "transparent"}; 
height: 16px;
background-color: #00C2FF;
border-radius: 16px;

@media screen and (max-width: 580px) {
    & {
      max-width: 320px;      
    }
  }

`;

export const ContainerCurrency = styled.div`
    display: flex;
    flex-direction: column;
    width: 430px;
    margin: 10px auto;

    input{
        height: 70px;
        padding: 5px;
        font-size: 22px;
        text-align: center;
        background-color: #D8D7D6;
        border: none;
        z-index: 1;
    }

    input::placeholder{
        font-size: 22px;
        text-align: center;
        color: #50340B;
    }

    button{
        height: 40px;
        background: rgb(255,214,0);
        background: linear-gradient(90deg, rgba(255,214,0,1) 0%, rgba(255,153,0,1) 100%);
        border: 2px solid #FFFFFF;
        color: #111111;
        border-radius: 4px;
        font-size: 18px;
        font-weight: 700;
        margin-top: 10px;
        cursor: pointer;
        z-index: 1;
    }

    @media screen and (max-width: 580px) {
    & {
      max-width: 320px;   
      margin-top:20px;
    }
    input{
        margin-top: 20px;
    }
  }

    `

export const Progress = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin: 10px 0px;
    position: relative;
    
    label{
        position: absolute;
        font-size: 14px;
        color: #fff;
        bottom: 20px;
        right: -10px;
        padding: 4px;
        width: 25px;
        background-color: red;
        text-align: center;
        border-radius: 50%;
    }

    span{
        color: #FFFFFF;
        font-size: 14px;
    }

    img{
        width: 25px;
        height: 25px;
        margin-left: 5px;
        margin-bottom: 5px;
        cursor: pointer;
    }

`