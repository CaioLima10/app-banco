
import { CardsContainer, Container } from "./styles";
import Header from "../Header/Header"
import { useState } from "react";

export default function MyCards() {

  const [deleteCard, setDeleteCard] = useState(JSON.parse(localStorage.getItem('cards')) || []);


    const createCards = JSON.parse(localStorage.getItem('cards')) || [];
  
    const addSpacesToCardNumber = (number) => {
      return number.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    };
  
      const addSpacesToCardExpiry = (expiry) => {
        return expiry.replace(/(\d{2})(\d{2})/, '$1/$2').trim(); 
      }

      const handleDeleteCard = (index) => {
        const updateCard = [...deleteCard];
    
        updateCard.splice(index, 1);
    
        setDeleteCard(updateCard);
        
        localStorage.setItem('cards', JSON.stringify(updateCard));
      };

  return (
  <>
      <Header/>
    <Container>
    {createCards.map((item, index) => (
      <CardsContainer key={index}>
        <div>
          <h2>{addSpacesToCardNumber(item.number)}</h2>
          <h3>{item.name}</h3>
          <span>{addSpacesToCardExpiry(item.expiry)}</span>
          <p>{item.cvc}</p>
        </div>
        <div>
          <button onClick={() => handleDeleteCard(index)} >confirmar</button>
        </div>
      </CardsContainer>
      ))}
        
    </Container>
  </>
  )
}
