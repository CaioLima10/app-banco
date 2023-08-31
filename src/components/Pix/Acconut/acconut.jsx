import { useEffect, useState } from "react";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { ContainerOpen } from "./style";

export default function Account() {
    const [open, setOpen] = useState(false);
    const createPix = JSON.parse(localStorage.getItem('Pix')) || [];


    useEffect(() => {
        const localToggleOpen = JSON.parse(localStorage.getItem('toggle'));
        if (localToggleOpen !== null) {
            setOpen(localToggleOpen);
        }
    }, []);

    const handleHideOpen = (event) => {
        event.preventDefault();
        setOpen(!open);
        localStorage.setItem('toggle', JSON.stringify(!open));
    };

    const calculateTotalValue = () => {
        let totalValue = 20000;
        for (const item of createPix) {
            totalValue -= parseFloat(item.number);
        }
        localStorage.setItem('totalValue', JSON.stringify(totalValue));
        return totalValue; 
    };

    return (
        <ContainerOpen>
                <div className="number__open__hide">
            <div id="title-balance">
                <span>Saldo disponivel</span>
            </div>
                <span id="number-open"> R$ {open ? calculateTotalValue() : "******"}</span>
            </div>

            <div className="btn__open__hide" onClick={handleHideOpen}>
                {open ? <BsEye /> : <BsEyeSlash />}
            </div>

            {createPix.map((item) => (
                <div key={item.id}></div>
            ))}
        </ContainerOpen>
    );
}
