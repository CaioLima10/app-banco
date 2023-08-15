import { Container, ContainerDialog, InfoCircle } from "./styles";

export default function Dialog({ message , onDialog}) {
  return (
    <Container onClick={() => onDialog(false)}>
        <ContainerDialog>
          <InfoCircle/>
          <h3>{message}</h3>
            <div className="container-btn">
              <button 
              className="confirm"
              onClick={() => onDialog(true)}
              >Confirmar</button>
              <button 
              className="cancel"
              onClick={() => onDialog(false)}
              >Cancelar</button>
            </div>
        </ContainerDialog>
    </Container>
  )
}
