import styled, { css } from "styled-components";


export const Container = styled.div`
    width: 100%;
    text-align: center;

`

export const CardsContainer = styled.div`
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
  max-width: 350px;
  height: 220px;
  border-radius: 16px;
  margin: 40px 45px auto;
  margin-bottom: 20px;
  padding: 20px;
  background: #ADA996;
  background: -webkit-linear-gradient(
    to right,
    #eaeaea,
    #dbdbdb,
    #f2f2f2,
    #ada996
  );
  background: linear-gradient(to right, #eaeaea, #dbdbdb, #f2f2f2, #ada996);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: inline-block;
  flex-direction: column;

  ${ props => props.$completed === "checked-block" &&
      css`
      opacity: ${props => (props.disabled ? "0.6" : "1")};
      pointer-events: ${props => (props.disabled ? "none" : "auto")};
      `
    }


    .btn-block{
        position: fixed;
        z-index:2;
      }


`;
