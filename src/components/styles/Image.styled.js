import styled from "styled-components";

export const Image = styled.img`
  padding: 15px 60px;
  margin: 4rem auto;
  width: 100vw;

  object-fit: contain;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 80vw;
    min-width: 80vw;
    margin: 1rem auto;
  }
`;
