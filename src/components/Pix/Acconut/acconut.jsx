import { useEffect, useState } from "react";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { ContainerOpen } from "./style";
import { currentMask } from "../mask";

export default function Account() {
    const [open, setOpen] = useState(false);
    const createPix = JSON.parse(localStorage.getItem('Pix')) || [];

    const handleInputChangePrice = (event) => {
        const price = event.target.value.trim()
        event.target.value = price
        return price
      }

    useEffect(() => {
        const localToggleOpen = JSON.parse(localStorage.getItem('toggle'));
        if (localToggleOpen !== null) {
            setOpen(localToggleOpen);
        }
    }, []);

    const handleToggleOpen = (event) => {
        event.preventDefault();
        setOpen(!open);
        localStorage.setItem('toggle', JSON.stringify(!open));
    };

    const calculateTotalValue = () => {
        let totalValue = 20000;
        for (const item of createPix) {
            totalValue -= parseFloat(item.number);
        }
        localStorage.setItem('totalValue', JSON.stringify(totalValue.toFixed(2)));
        
        return totalValue.toFixed(2);
    };

    return (
        <ContainerOpen>
            <div className="number__open__hide">
                <span onChange={(e) => handleInputChangePrice(currentMask(e))} id="number-open" >R$ {open ? calculateTotalValue() : "******"} </span>
            </div>
            <div className="btn__open__hide" onClick={handleToggleOpen}>
                {open ? <BsEye /> : <BsEyeSlash />}
            </div>

            {createPix.map((item) => (
                <div key={item.id}></div>
            ))}
        </ContainerOpen>
    );
}
