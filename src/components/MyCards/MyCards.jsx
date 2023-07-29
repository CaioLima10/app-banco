
import { CardsContainer, Container } from "./styles";
import Header from "../Header/Header"
import { useState } from "react";

export default function MyCards() {

  const [deleteCard, setDeleteCard] = useState(JSON.parse(localStorage.getItem('cards')) || []);
  const [createCard, setCreateCards] = useState(JSON.parse(localStorage.getItem('cards')) || []);

  console.log(createCard)


    const createCards = JSON.parse(localStorage.getItem('cards')) || [];
  
    const addSpacesToCardNumber = (number) => {
      return number.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    };
  
      const addSpacesToCardExpiry = (expiry) => {
        return expiry.replace(/(\d{2})(\d{2})/, '$1/$2').trim(); 
      }

      const handleDeleteCard = (id) => {
    

    const cardIndex = deleteCard.findIndex((card) => card.id === id);
        
        if (cardIndex !== -1) {
  
        const updateCard = [...deleteCard];      
        updateCard.splice(cardIndex, 1);
        setDeleteCard(updateCard);
        localStorage.setItem('cards', JSON.stringify(updateCard));
        }    
      };

      const handleClickBlock = (id) => {
        const updatedCards = JSON.parse(localStorage.getItem('cards')) || [];
      
        const updatedCardsWithBlock = updatedCards.map((card) => {
          if (card.id === id) {
            return {
              ...card,
              isCompleted: !card.isCompleted,
            };
          }
          return card;
        });
      
        setCreateCards(updatedCardsWithBlock);
        localStorage.setItem('cards', JSON.stringify(updatedCardsWithBlock));
      };
      
      
  

  return (
  <>
      <Header/>
    <Container>
    {createCards.map((item ) => (
      <>   
      <CardsContainer key={item.id}
        $completed={item.isCompleted ? 'checked-block' : 'remove-block'}
        className={item.isCompleted ? "checked-block" : ""}
        disabled={item.isCompleted}
      >
        <div>
          <h2>{addSpacesToCardNumber(item.number)}</h2>
          <h3>{item.name}</h3>
          <span>{addSpacesToCardExpiry(item.expiry)}</span>
          <p>{item.cvc}</p>
        </div>
        <div>
          <button onClick={() => handleDeleteCard(item.id)} >confirmar</button>
        </div>
      </CardsContainer>
         <div>
            <button className="btn-block" onClick={ () => handleClickBlock(item.id) }>bloquear</button>
        </div>
      </>
      ))}
    </Container>
  </>
  )
}
