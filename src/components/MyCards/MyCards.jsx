import { 
        CardsContainer, 
        Container, 
        CardList, 
        Visa, 
        DescribeContainer, 
        ButtonDelete, 
        Lock, 
        OpenLock, 
        ContainerCvcExpiry, 
        ContainerFunctions, 
        ArrowForward, 
        Cards,
        TitleVisa,
        CreateCards} from "./styles";

import Header from "../Header/Header";
import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/LOGO-GOLD.png"
import ImgCard from "../../assets/Group 22.png"
import IconCardPlus from "../../assets/Group 35.png"
import iconDelete from "../../assets/Bin.png"
import { Link } from "react-router-dom";
import StyleColorGlobal from "../styleColorGlobal";
import Dialog from "./Dialog";

export default function MyCards() {
  const storedCards = JSON.parse(localStorage.getItem('cards')) || [];
  const filteredCards = storedCards.filter((card) => card !== null);
  const storedColor = JSON.parse(localStorage.getItem('backgroundCard'));
  
  const [deleteCard, setDeleteCard] = useState(filteredCards);
  const [createCards, setCreateCards] = useState(filteredCards);
  const [backgroundCard, setBackgroundCard] = useState(storedColor || "rgb(157,156,156)");


  const idCardRef = useRef() 
  const handleDialog = ( message , isLoading ) => {
    setDialog({
      message,
      isLoading

    })
  }

  const [ dialog , setDialog ] = useState({
    message: 'deseja realmente deletar',
    isLoading: false
  })

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
    handleDialog("Deseja mesmo deletar... essa ação não poderá voltar atrás", true)

    idCardRef.current = id

      }

    const areUSuruDelete = (choose) => {
        if(choose){
          const cardIndex = deleteCard.findIndex((card) => card.id === idCardRef.current);
          const updateCard = [...deleteCard];
          updateCard.splice(cardIndex, 1);
          localStorage.setItem('cards', JSON.stringify(updateCard));
          setDeleteCard(updateCard);
          setCreateCards(updateCard);
          handleDialog("", false)
        }else{
          handleDialog("", false)
        }
    }


  return (
    <>
      <Header />
      <StyleColorGlobal/>
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
                  {addSpacesToCardExpiry(item.expiry)}  <small className="validate"><p>VALIDADE</p> 05/27</small>
                  </small>
                  <small style={{ color: backgroundCard }}><p>CVV</p>{item.cvc}</small>
                  </ContainerCvcExpiry>
                  <TitleVisa>
                  <h4 className="name-title" style={{ color: backgroundCard }}>{addToCardLetter(item.name)}</h4>
                    <Visa />
                  </TitleVisa>
                </DescribeContainer>

                <ContainerFunctions>
                  <p className="title-digital">Cartão Digital</p>
                  <div className="border-card"></div>
                  <ButtonDelete
                    $completed={item.isCompleted ? "checked-block" : "remove-block"}
                    className={item.isCompleted ? "checked-block" : ""}
                    disabled={item.isCompleted}
                    onClick={() => handleDeleteCard(item.id)}
                  >
                    <img src={iconDelete} alt="" />
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
                <CreateCards>
                  <div>
                    <img src={ImgCard} alt="image-plus" />
                    <p>Espaço vazio para cartão</p>
                    <div className="border-color-plus"></div>
                      <Link to="/" >
                        <button className="btn-card-plus"><img className="icon-card" src={IconCardPlus} alt="card-plus" />Criar novo Cartão </button>
                      </Link>
                  </div>
                </CreateCards>
        </CardList>
          { dialog.isLoading &&   <Dialog onDialog={areUSuruDelete} message={dialog.message}/>}
      </Container>
    </>
  );
}
