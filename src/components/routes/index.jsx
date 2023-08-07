import { BrowserRouter , Route , Routes } from "react-router-dom";
import CreditCard from "../Card/Card";
import MyCards from "../MyCards/MyCards";
import Pix from "../Pix/Pix";
import Home from "../Home/Home";
import Sent from "../Pix/Sent";

export default function RouterApp () {
  return (
    <>  
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/criar" element={<CreditCard/>} />
            <Route  path="/meus-cartoes" element={<MyCards/>} />
            <Route  exact path="/pagamentos" element={<Pix/>} />
            <Route exact path="/enviado" element={<Sent/>} />
            <Route  path="*" element={<Home/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
} 
