import { CardsContainer, Container } from "./styles";
import Header from "../Header/Header";
import React, { useState, useEffect } from "react";

export default function MyCards() {
  const storedCards = JSON.parse(localStorage.getItem('cards')) || [];
  const filteredCards = storedCards.filter((card) => card !== null);

  const [deleteCard, setDeleteCard] = useState(filteredCards);
  const [createCards, setCreateCards] = useState(filteredCards);

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(createCards));
  }, [createCards]);

  const addSpacesToCardNumber = (number) => {
    return number.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
  };

  const addSpacesToCardExpiry = (expiry) => {
    return expiry.replace(/(\d{2})(\d{2})/, '$1/$2').trim();
  };


  const handleClickBlock = (id) => {
    const updatedCards = [...createCards];

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
  };

  const handleDeleteCard = (id) => {
    const cardIndex = deleteCard.findIndex((card) => card.id === id);

    if (cardIndex !== -1) {
      const updateCard = [...deleteCard];
      updateCard.splice(cardIndex , 1);
      
      setDeleteCard(updateCard);
      
      setCreateCards(updateCard)

      localStorage.setItem('cards' , JSON.stringify(updateCard))
    }
  };

  return (
    <>
      <Header />
      <Container>
        {createCards.map((item , index) => (
          <React.Fragment key={index}>
            <CardsContainer
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
                <button onClick={() => handleDeleteCard(item.id)}>confirmar</button>
              </div>
            </CardsContainer>
            <div>
              <button className="btn-block" onClick={() => handleClickBlock(item.id)}>bloquear</button>
            </div>
          </React.Fragment>
        ))}
      </Container>
    </>
  );
}
