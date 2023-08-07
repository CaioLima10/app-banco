import  { useEffect, useRef, useState } from "react";
import { Button, Container, ContainerModal, DescribeInformation } from "./style";
import { InformationFill } from "./style";

export default function ModalInformation() {
  const [isHiddenModal, setIsHiddenModal] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && modalRef.current.contains(event.target)) {
        setIsHiddenModal(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleIsHidden = () => {
    setIsHiddenModal((prevState) => !prevState);
  };

  return (
    <Container >
      <Button onClick={handleIsHidden}>
        <InformationFill title="informação" />
      </Button>
      {isHiddenModal && (
        <ContainerModal ref={modalRef}>
          <DescribeInformation>
            O número do seu cartão, código de segurança e a data de validade, é gerada automaticamente pelo sistema.
          </DescribeInformation>
        </ContainerModal>
      )}
    </Container>
  );
}
