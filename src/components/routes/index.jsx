import { BrowserRouter , Route , Routes } from "react-router-dom";
import CreditCard from "../Card/Card";
import MyCards from "../MyCards/MyCards";

export default function RouterApp () {
  return (
    <>  
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<CreditCard/>} />
            <Route  path="/meus-cartoes" element={<MyCards/>} />
            <Route  path="*" element={<CreditCard/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
} 
