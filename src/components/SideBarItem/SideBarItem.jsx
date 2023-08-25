import { Container, StyledRouterLink } from "./style";

export default function SideBarItem({ Icon , Text , to }) {
  return (
    <>  
      <StyledRouterLink to={to}>
        <Container>
            <Icon/>
            {Text}
        </Container>
      </StyledRouterLink>
    </>
  )
}
  