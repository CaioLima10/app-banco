import { 
        CardsContainer, 
        Container, 
        CardList, 
        Visa, 
        DescribeContainer, 
        ButtonDelete, 
        Lock, 
        OpenLock, 
        Delete,  
        ContainerCvcExpiry, 
        ContainerFunctions, 
        ArrowForward, 
        Cards,
        TitleVisa} from "./styles";

import Header from "../Header/Header";
import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import Logo from "../../assets/LOGO-GOLD.png"

export default function MyCards() {
  const storedCards = JSON.parse(localStorage.getItem('cards')) || [];
  const filteredCards = storedCards.filter((card) => card !== null);
  const storedColor = JSON.parse(localStorage.getItem('backgroundCard'));
  
  const [deleteCard, setDeleteCard] = useState(filteredCards);
  const [createCards, setCreateCards] = useState(filteredCards);
  const [backgroundCard, setBackgroundCard] = useState(storedColor || "rgb(157,156,156)");

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(createCards));
  }, [createCards]);


  const addSpacesToCardExpiry = (expiry) => {
    if (typeof expiry === 'string') {
      return expiry.replace(/(\d{2})(\d{2})/, '$1/$2').trim();
    }
    return '';
  };

  const addToCardLetter = (name) => {
    return name.replace(/[^a-zA-Z]+/g, " ");
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

    Swal.fire({
      title: 'Tem certeza?',
      text: "Você não será capaz de reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, apague!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Excluído!',
          'Seu arquivo foi excluído.',
          'success'
        );

        if (cardIndex !== -1) {
          const updateCard = [...deleteCard];
          updateCard.splice(cardIndex, 1);

          setDeleteCard(updateCard);
          setCreateCards(updateCard);

          localStorage.setItem('cards', JSON.stringify(updateCard));
        }
      }
    });
  };

  return (
    <>
      <Header />
      
      <Container>
        <CardList>
          {createCards.map((item , index) => (
            <React.Fragment key={index}>
              <CardsContainer>
                <Cards
                    onChange={(e) => setBackgroundCard(e.target.value)}
                    style={{ backgroundColor: item.color }}
                >
                <DescribeContainer
                  $completed={item.isCompleted ? "checked-block" : "remove-block"}
                  className={item.isCompleted ? "checked-block" : ""}
                  disabled={item.isCompleted}
                >
                  <img src={Logo} alt="logo" />
                  <div className="container-option-card" >
                    <small className="option-card">{item.option}</small>
                  </div>
                  <h2  style={{ color: backgroundCard }}>{item.number}</h2>

                  <ContainerCvcExpiry>
                  <small style={{ color: backgroundCard }}> <p className="create">EMITIDO</p> 
                  {addSpacesToCardExpiry(item.expiry)}  <small className="validate"><p>VALIDADE</p> 05/27</small> </small>
                  <small style={{ color: backgroundCard }}><p>CVV</p>{item.cvc}</small>
                  </ContainerCvcExpiry>
                  <TitleVisa>
                  <h4 className="name-title" style={{ color: backgroundCard }}>{addToCardLetter(item.name)}</h4>
                    <Visa />
                  </TitleVisa>
                </DescribeContainer>

                <ContainerFunctions>
                  <div className="border-card"></div>
                  <ButtonDelete
                    $completed={item.isCompleted ? "checked-block" : "remove-block"}
                    className={item.isCompleted ? "checked-block" : ""}
                    disabled={item.isCompleted}
                    onClick={() => handleDeleteCard(item.id)}
                  >
                    <Delete />
                    <p>Excluir o cartão</p>
                    <ArrowForward />
                  </ButtonDelete>
                </ContainerFunctions>

                <button className="btnBlock"
                  onClick={() => handleClickBlock(item.id)}
                >{item.isCompleted ? <Lock /> : <OpenLock />}
                </button>
                </Cards>
              </CardsContainer>
            </React.Fragment>
          ))}
        </CardList>
      </Container>
    </>
  );
}
