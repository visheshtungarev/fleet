import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: ${(props) => props.alignItem || "center"};

  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
