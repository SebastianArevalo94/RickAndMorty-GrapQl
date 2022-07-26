import styled from "styled-components";

export const Add = styled.div`
  margin-top: 20px;
  width: 95%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 928px) {
    justify-content: center;
  }
`;
export const Button = styled.button`
  background: ${(props) => props.theme.pallete.button1};
  font-weight: ${(props) => props.theme.text.fontWeight};
  border-radius: 5px;
  padding: 13px;
  color: ${(props) => props.theme.pallete.white};
  border: none;
  cursor: pointer;
  &:disabled {
    background-color: violet;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoadingIcon = styled.img`
  width: 150px;
`;
export const LoadingText = styled.p`
  width: 150px;
  font-family: "Play", sans-serif;
  font-size: 50px;
`;

export const InfoText = styled.p`
  text-align: center;
  font-family: "Play", sans-serif;
  font-size: 45px;
`;
