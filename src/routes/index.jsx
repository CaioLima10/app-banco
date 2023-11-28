import {Route , Routes } from "react-router-dom";
import CreditCard from "../components/Card/Card";
import MyCards from "../components/MyCards/MyCards";
import Pix from "../components/Pix/Pix";
import Sent from "../components/Pix/Sent/index";
import Home from "../components/Home/home"
import Extract from "../components/Extract/extract";
import Savings from "../components/Savings/savings"

export default function RouterApp () {
  return (
    <>  
]        <Routes>
            <Route path="/" element={<Home/> } />
            <Route  path="/criar" element={<CreditCard/>} />
            <Route  path="/meus-cartoes" element={<MyCards/>} />
            <Route  path="/pagamentos" element={<Pix/>} />
            <Route  path="/enviado" element={<Sent/>} />
            <Route  path="/extrato" element={<Extract/>} />
            <Route path="/poupanca" element={<Savings/>}/>
            <Route path="*" element={<Home/>}/>
        </Routes>
    </>
  )
} 
