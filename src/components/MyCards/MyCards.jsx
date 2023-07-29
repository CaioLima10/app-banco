
import { Cards } from "../Card/styles";
import Header from "../Header/Header"

export default function MyCards() {


    const createCards = JSON.parse(localStorage.getItem('cards')) || [];
  
    const addSpacesToCardNumber = (number) => {
      return number.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    };
  
      const addSpacesToCardExpiry = (expiry) => {
        return expiry.replace(/(\d{2})(\d{2})/, '$1/$2').trim(); 
      }


  return (
    <div>
      <Header/>
    {createCards.map((item, index) => (
      <Cards key={index}>
          <h2>{addSpacesToCardNumber(item.number)}</h2>
          <h3>{item.name}</h3>
          <span>{addSpacesToCardExpiry(item.expiry)}</span>
          <p>{item.cvc}</p>
      </Cards>
      ))}
    </div>
  )
}
