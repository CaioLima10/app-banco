import TargetImg from "../../../assets/Alvo.png"
import { ContainerPoupaHero } from "./style"

export default function ContentTextHero() {
  return (
    <ContainerPoupaHero>
      <div className="content-poupa-hero">
      <h1>POUPA HEROI <img className="target" src={TargetImg} alt="Image-alvo" /> </h1>

      <p>Programa de ajuda a institutos que cuidam de crianças e adolescentes.</p>

      <h3>Faça parte desta campanha!</h3>

      <p>Ao poupar com POUPA HERÓI!!, o valor do juros do CDI (100% CDI) será doado para instituição carentes.</p>

      <p>Com isso Ao alcançar a meta do POUPA HERÓI, você Ganha <span>CASHBACK e DESCONTOS em lojas parceiras! </span> </p>

      <h2>Você ganha e nossas Crianças tambem!</h2>
      </div>

    </ContainerPoupaHero>
  )
}
