import { StyledHeader } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Flex>
          <div>
            <h1>Vish's Studio </h1>

            <p>Search Image and get Color code !!!</p>
          </div>
        </Flex>
      </Container>
    </StyledHeader>
  );
}
