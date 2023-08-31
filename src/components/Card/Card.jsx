    import { useEffect, useRef, useState } from 'react';
    import { Cards, ContainerCard, ContextCard, Form, ContainerForm, Paper, Visa, ContainerCardSelect, Wifi, CardsStyle, IconsCardStyle } from './styles';
    import Header from '../Header/Header';
    import ModalInformation from './Information';

    import { AiFillEye } from "react-icons/ai";
    import { GrFormViewHide } from "react-icons/gr";
    import { Check, Container, Times } from "./ValidadePassword/style";
    import { useNavigate } from 'react-router-dom';
    import ImgStyle from "../../assets/Mask.png"
    import StyleColorGlobal from '../styleColorGlobal';


    const CreditCard = () => {
      const storedColor = JSON.parse(localStorage.getItem('backgroundCard'));

      const [cardName, setCardName] = useState("");
      const [createCards , setCreateCards] = useState([]); 
      const [backgroundCard, setBackgroundCard] = useState(storedColor);

      const [cardCvc, setCardCvc] = useState("");
      const [randomNumber, setRandomNumber] = useState("");

      const [isCardNameEmpty, setIsCardNameEmpty] = useState(false);
      const [isValidLetterEmpty, setIsValidLetterEmprt] = useState(false);
      const [ isCardPasswordEmpty , setIsCardPasswordEmpty ] = useState(false)

      const [show, setShow] = useState(false);
      const [isCapitalValidAz, setCapitalValidAz] = useState(false);
      const [isCapitalValidSpecial, setCapitalValidSpecial] = useState(false);
      const [isCapitalValidChar, setCapitalValidChar] = useState(false);
      const [isCapitalValidMore, setCapitalValidMore] = useState(false);
      const [isPasswordValid, setIsPasswordValid] = useState(false);
      const [cardPassword, setCardPassword] = useState("");
      const [isVisibleCard , setIsVisibledCard] = useState(false)
      const [isVisibleCardStyle , setIsVisibledCardStyle] = useState(false)

      const [colorOne, setColorOne] = useState("#000000"); 
      const [colorTwo, setColorTwo] = useState("#FFFFFF"); 
      const [ colorIcons , setColorIcons ] = useState("#E9E9E9")
      const [ subColorCard , setSubColorCard ] = useState("#242424")
      const [ subColorCardOne , setSubColorCardOne ] = useState("#E9E9E9")

      const navigate = useNavigate()

      const cardNameRef = useRef(null);
      const cardNameLetterRef = useRef(null);
      const passwordInputRef = useRef(null);

      function handleNameKeyPress(event) {
        const charCode = event.charCode;
        if (
          (charCode >= 48 && charCode <= 57) || 
          charCode === 59 ||
          charCode === 45 || 
          charCode === 43 || 
          charCode === 47 || 
          charCode === 42 || 
          charCode === 46    
        ) {
          event.preventDefault();
        } 
      }

      function handleCardNameBlur() {
        const cardNameValue = cardNameRef.current.value;
        setIsCardNameEmpty(!cardNameValue);
      }
      
      function handdleCardLetterNameBlur() {
        const cardNameLetter = cardNameLetterRef.current.value;
        setIsValidLetterEmprt(!cardNameLetter);
      }

      function handleCardPasswordBlur(){
        const cardPasswordValue = passwordInputRef.current.value;
        setIsCardPasswordEmpty(!cardPasswordValue)
      }

      const addToCardLetter = (name) => {
        if (typeof name === 'string') {
          return name.replace(/[^a-zA-Z ]/g, '');
        } else {
          return "";
        }
      };

      const handleInputChangePassword = (e) => {
        const password = e.target.value.trim();
        setCardPassword(password);

        e.target.value = password
      
        setIsPasswordValid( 
            /[A-Z]/.test(password) &&
            /\d/.test(password) && /[/[!@#$%^&*]/.test(password) && password.length >= 8
        );
      
        setCapitalValidAz(/[A-Z]/.test(password));
        setCapitalValidSpecial(/\d/.test(password));
        setCapitalValidChar(/[!@#$%^&*]/.test(password));
        setCapitalValidMore(password.length >= 8);
      };
      
  useEffect(() => {
    const number = Math.floor(1000000000000000 + Math.random() * 9000000000000000);
    setRandomNumber(number);

    const numberCvc = Math.floor(100 + Math.random() * 899);
    setCardCvc(numberCvc); 
  }, []);

    useEffect(() => {
        const cardsLocalstorage = localStorage.getItem('cards');
        if (cardsLocalstorage) {
          const loadCardStorage = JSON.parse(cardsLocalstorage);
          setCreateCards(Array.isArray(loadCardStorage) ? loadCardStorage : []);
        }      
    }, []);

      const handleClickBtn = (event) => {
        event.preventDefault();

          if (!cardName) {
            setIsCardNameEmpty(true);
            return;
          } else {
            setIsCardNameEmpty(false);
          }
        
          if (cardName.length < 6) {
            setIsValidLetterEmprt(true);
            return;
          } else {
            setIsValidLetterEmprt(false);
          }
          setCardName(createCards)

        const newCard = {
          id: Date.now(),
          number: randomNumber,
          name: cardName,
          expiry: new Date().toLocaleDateString("pt-br", {
            month: "2-digit",
            year: "2-digit"
          }),
          cvc: cardCvc,
          color: backgroundCard,
          colorOne: "#000000",
          colorTwo: "#e3e3e3",
          subColorCard: "#242424",
          subColorCardOne: "#E9E9E9",
          colorIcons: "#E9E9E9",
          password: cardPassword

        };

      const nameExists = createCards.some((card) => card.name.toLowerCase() === cardName.toLowerCase())
    
      if (nameExists) {
        alert("Já existe um usuario com esse nome cadastrado!!");
        setCardName('');
        return
      }
      if(!backgroundCard){
        alert("escolha seu cartão!")
        setCardName('');
        return
      }
        setCreateCards((prevCards) => {
 
          const updatedCards = [...prevCards, newCard];
          localStorage.setItem('cards', JSON.stringify(updatedCards));
          navigate("/meus-cartoes")
          return updatedCards;
        });
      };

      const handleInputChangeName = (e) => {
        const name = e.target.value.trimStart()
        setCardName(name)
      } 

      const showHidePassword = (event) => {
        event.preventDefault();
        setShow((prevIsHidden) => !prevIsHidden);
      };

      useEffect(() => {
        if(!backgroundCard){
          setIsVisibledCard(false)
          setIsVisibledCardStyle(true)
        }else{
        setIsVisibledCard(true)
        setIsVisibledCardStyle(false)
      }
      },[backgroundCard])

      return (
        <div>
          <Header/>
          <ContainerForm>
            <Paper> 
              <ContainerCardSelect>
                <h3 className='custom-title'>Crie agora seu Cartão SIGMABANK <br /> personalizado do seu jeito!</h3>
                { isVisibleCardStyle && (
                  <Cards>
                    <CardsStyle>
                      <IconsCardStyle/>  
                      <span>Crie seu cartão</span>
                    </CardsStyle>  
                  </Cards>
                ) }
                {isVisibleCard && (
                <Cards>
                  <ContainerCard style={{ backgroundColor: backgroundCard}}>
                      <ContextCard>
                        <ModalInformation/>
                            <img src={ImgStyle} alt="LOGO" />
              
                        <h3 style={{ color: backgroundCard === colorOne ? colorTwo : colorOne, marginLeft: '20px' }}>{addToCardLetter(cardName)}</h3>
                      </ContextCard>
                      <Visa style={{ color: backgroundCard === '#000000' ? colorIcons : colorIcons}}/>
                      <Wifi style={{ color: backgroundCard === '#000000' ?  colorIcons : colorIcons}}/>
                      <div 
                        className='border-color' 
                        style={{ background: backgroundCard === subColorCardOne ? subColorCardOne : subColorCard}}
                        ></div>
                    </ContainerCard>  
                </Cards>
                )}

                <label className='title-color'> Escolha a cor do seu Cartão</label>
                <select value={backgroundCard} onChange={(e) => {
                    setBackgroundCard(e.target.value);
                    if (e.target.value === "#E9E9E9") {
                      setColorOne("#000000")
                      setSubColorCardOne("#E9E9E9");
                      setColorIcons("#000000")
                    } else if (e.target.value === "#000000") {
                      setColorOne("#000000");
                      setSubColorCard("#242424");
                      setColorIcons("#e9e9e9")
                    } else if (e.target.value === "#323232") {
                      setColorOne("#e3e3e3");
                      setSubColorCard("#242424");
                      setColorIcons("#e3e3e3")
                    }else if (e.target.value === "#323B44") {
                      setColorOne("#e3e3e3");
                      setSubColorCard("#242424");
                      setColorIcons("#e3e3e3")
                    }else if (e.target.value === "#443333") {
                      setColorOne("#e3e3e3");
                      setSubColorCard("#242424");
                      setColorIcons("#e3e3e3")
                    }
                  }}>
                    { backgroundCard ? <option disabled>Opções</option> : <option hidden>Opções</option> }
                    <option value="#E9E9E9">modern White</option>
                    <option value="#000000">modern Black</option>
                    <option value="#323232">modern gray</option>
                    <option value="#323B44">modern blue</option> 
                    <option value="#443333">modern crimson</option> 

                  </select>

              </ContainerCardSelect>
      
              <Form onSubmit={handleClickBtn} >
                <label className='label-name'>Digite seu nome completo</label>
              <input
                  type="text"
                  name="name"
                  placeholder="Ex: Amanda silva"
                  maxLength={16}
                  onKeyPress={handleNameKeyPress ? handleNameKeyPress : handdleCardLetterNameBlur}
                  ref={cardNameRef ? cardNameRef : cardNameLetterRef}
                  onBlur={handleCardNameBlur}
                  value={cardName}
                  onChange={handleInputChangeName}
                  />

                {isCardNameEmpty && <small>Preencha o nome completo!</small>}
                {isValidLetterEmpty && <small>Necessário ter 6 ou mais caracteres</small>}

                <Container>
                        <label className='label'>Digite sua senha digital</label>
                      <div>
                        <input
                          className="input-is-hidden"
                          type={show ? "text" : "password"}
                          placeholder="Ex: Amanda@123"
                          onChange={handleInputChangePassword}
                          ref={passwordInputRef} 
                          onBlur={handleCardPasswordBlur}

                        />
                        <button className="btn-is-hidden" onClick={showHidePassword}>
                          {show ? <AiFillEye /> : <GrFormViewHide />}
                        </button>
                      </div>
                      <div className="container-isValid">
                        <p className="capital">
                          {isCapitalValidAz ? <Check /> : <Times />}
                          <span>letra maiúscula</span>
                        </p>
                        <p>
                          {isCapitalValidSpecial ? <Check /> : <Times />}
                          <span>usar números</span>
                        </p>
                        <p>
                          {isCapitalValidChar ? <Check /> : <Times />}
                          <span>caracteres especiais</span>
                        </p>
                        <p>
                          {isCapitalValidMore ? <Check /> : <Times />}
                          <span>8+ caracteres</span>
                        </p>
                      </div>
                </Container>
                        {isCardPasswordEmpty && <small>Campo de senha obrigatorio</small> }
                        <button type="submit" disabled={!isPasswordValid}>
                    Confirmar
                  </button>
              </Form>
            </Paper>
          </ContainerForm>
          <StyleColorGlobal/>
        </div>
      );
    };

    export default CreditCard;
