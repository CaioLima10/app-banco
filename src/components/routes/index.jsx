import { BrowserRouter , Route , Routes } from "react-router-dom";
import CreditCard from "../Card/Card";
import MyCards from "../MyCards/MyCards";
import Pix from "../Pix/Pix";
import Sent from "../Pix/Sent/index";
import Home from "../Home/home"
import Extract from "../Extract/extract";

export default function RouterApp () {
  return (
    <>  
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/> } />
            <Route  path="/criar" element={<CreditCard/>} />
            <Route  path="/meus-cartoes" element={<MyCards/>} />
            <Route  path="/pagamentos" element={<Pix/>} />
            <Route  path="/enviado" element={<Sent/>} />
            <Route  path="/extrato" element={<Extract/>} />
            <Route path="*" element={<Home/> } />
        </Routes>
    </BrowserRouter>
    </>
  )
} 
