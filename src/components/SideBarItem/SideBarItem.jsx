import { Link } from "react-router-dom";
import { Container } from "./style";

export default function SideBarItem({ Icon , Text , to }) {
  return (
    <>  
      <Link to={to}>
        <Container>
            <Icon/>
            {Text}
        </Container>
      </Link>
    </>
  )
}
  