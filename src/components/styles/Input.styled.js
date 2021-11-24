import styled from "styled-components";

export const Input = styled.input`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  width: 20vw;

  &:hover {
    opacity: 0.9;
    transform: scale(1.1);
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 80vw;
    margin: 1rem auto;
  }
`;
