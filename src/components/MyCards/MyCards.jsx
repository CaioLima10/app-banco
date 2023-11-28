  import { 
          CardsContainer, 
          Container, 
          CardList, 
          Visa, 
          DescribeContainer, 
          ButtonDelete, 
          Lock, 
          OpenLock, 
          ContainerFunctions, 
          ArrowForward, 
          Cards,
          TitleVisa,
          CreateCards,
          ContainerContent,
          Wifi,
          StyledLink} from "./style";

  import Header from "../Header/Header";
  import React, { useState, useEffect, useRef } from "react";
  import ImgCard from "../../assets/Group 22.png"
  import StyleColorGlobal from "../styleColorGlobal";
  import Dialog from "./Dialog";
  import BackToTopButton from "../../BackToTopButton/index"
  import ImgStyle from "../../assets/Mask.png"
  import ImgStyleCircle from "../../assets/Capa-links.png"

  export default function MyCards() {
    const storedCards = JSON.parse(localStorage.getItem('cards')) || [];
    const filteredCards = storedCards.filter((card) => card !== null);

    const storedBackgroundCard = JSON.parse(localStorage.getItem('backgroundCard'));
    const backgroundCard = storedBackgroundCard || "#E9E9E9";

    const createCardsWithColors = filteredCards.map((card) => ({
      ...card,
    }));

    const [deleteCard, setDeleteCard] = useState(createCardsWithColors);
    const [createCards, setCreateCards] = useState(createCardsWithColors);


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
      const [cardNameTextColor, setCardNameTextColor] = useState('#FFFFFF'); 

      function getBrightness(hexColor) {
        const r = parseInt(hexColor.slice(1, 3), 16);
        const g = parseInt(hexColor.slice(3, 5), 16);
        const b = parseInt(hexColor.slice(5, 7), 16);
        return (r * 299 + g * 587 + b * 114) / 1000;
      }

      const [cardNameBorderColor, setCardNameBorderColor] = useState('#FFFFFF'); 

      function getBrightnessBorder(hexColor) {
        const r = parseInt(hexColor.slice(1, 3), 16);
        const g = parseInt(hexColor.slice(3, 5), 16);
        const b = parseInt(hexColor.slice(5, 7), 16);
        return (r * 299 + g * 587 + b * 114) / 1000;
      }
        
      useEffect(() => {
        const textColor = getBrightness(backgroundCard) < 128 ? '#FFFFFF' : '#000000';
        setCardNameTextColor(textColor);
      }, [backgroundCard]);

      useEffect(() => {
        const subColor = getBrightnessBorder(backgroundCard) < 128 ? '#FFFFFF' : '#242424';
        setCardNameBorderColor(subColor);
      }, [backgroundCard]);

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
                      style={{ backgroundColor: item.color }}
                  >
                    { backgroundCard && <img src={ImgStyle} alt="LOGO" /> || <img src={ImgStyleCircle} alt="LOGO" /> }
                    
                  <DescribeContainer
                    $completed={item.isCompleted ? "checked-block" : "remove-block"}
                    className={item.isCompleted ? "checked-block" : ""}
                    disabled={item.isCompleted}
                  >
                    <div className="container-option-card" >
                      <small className="option-card">{item.option}</small>
                    </div>
              
                  <div className="container-number">
                    {
                      item.colorOne && item.colorTwo ? (
                        <h2 style={{ color: getBrightness(item.color) < 128 ? item.colorTwo : item.colorOne }}>
                          {item.number}
                        </h2>
                      ) : null
                    }
                  </div>

                  <div className="container-name-expiry">
                    <h3 className="title-name" style={{ color: getBrightness(item.color) < 128 ? item.colorTwo : item.colorOne }}>
                          {addToCardLetter(item.name)}
                    </h3>
                    <div className="container-expiry">
                      <p style={{ color: getBrightness(item.color) < 128 ? item.colorTwo : item.colorOne }}>
                            {item.expiry}
                      </p>
                    </div>
                  </div>
                  <div className='sub-color' 
                      style={{ backgroundColor:getBrightnessBorder(item.color) < 128 ? item.subColorCard : item.subColorCardOne  }}>  
                  </div>

                  <TitleVisa>
                    <Wifi style={{ color: getBrightness(item.color) < 128 ? item.colorTwo : item.colorOne }}/>
                    <Visa style={{ color: getBrightness(item.color) < 128 ? item.colorTwo : item.colorOne }}/>
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
                      <p>Excluir o cartão</p>
                      <ArrowForward />
                    </ButtonDelete>
                  </ContainerFunctions>

                  <button className="btnBlock"
                    onClick={() => handleClickBlock(item.id)}
                  >{item.isCompleted ? <Lock /> : <OpenLock />}
                  </button>
                  </Cards>
                  <ContainerContent>
                  </ContainerContent>
                </CardsContainer>
              </React.Fragment>
            ))}
                  <CreateCards>
                    <div>
                      <img src={ImgCard} alt="image-plus" />
                      <p>Espaço vazio para cartão</p>
                      <div className="border-color-plus"></div>
                        <StyledLink to="/criar" >
                          <button className="btn-card-plus">Criar novo Cartão </button>
                        </StyledLink>
                    </div>
                  </CreateCards>
          </CardList>
            { dialog.isLoading &&   <Dialog onDialog={areUSuruDelete} message={dialog.message}/>}
        </Container>
        <BackToTopButton/>
      </>
    );
  }
