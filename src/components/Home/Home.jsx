import Image from "../../assets/Group 3.png"
import ImageCard from "../../assets/Frame 4.png"
import { ArrowRight, Container, Section } from "./style"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
        <Section>
            <Container> 
                    <div className="container-btn">
                        <h1>Seja Bem-vindo!</h1>

                        <img className="img-card" src={ImageCard} alt="card" /> 
                        <h3>Crie agora seu Cartão SIGMABANK e aproveite nosso sistema de TRANSFERENCIA e PAGAMENTO!</h3>
                        <Link to="/criar"><button>Crie seu Cartão<ArrowRight/></button></Link>
                    </div>
                    <img src={Image} className="img-User" alt="user" />
                    

            </Container>
        </Section>
        </>
    )
}
