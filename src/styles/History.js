import styled from "styled-components";

export const HistoryContainer = styled.div`
  margin-top: 17px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-family: "Play", sans-serif;
  font-size: 50px;
  text-align: center;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  width: 80%;
  margin: auto;
`;

export const Item = styled.div`
  background-color: ${(props) => props.theme.pallete.white};
  display: flex;
  width: 100%;
  box-shadow: rgb(136 152 170 / 15%) 0px 0px 2rem 0px;
  align-items: center;
`;

export const ItemImg = styled.img`
  height: 100px;
  justify-self: flex-start;
`;

export const ItemName = styled.p`
  font-family: "Play", sans-serif;
  font-size: 25px;
  flex-grow: 1;
  margin-left: 18px;
`;

export const ViewButton = styled.button`
  font-weight: ${(props) => props.theme.text.fontWeight};
  border-radius: 5px;
  margin: 15px;
  padding: 13px;
  color: ${(props) => props.theme.pallete.white};
  border: 1px solid ${(props) => props.theme.pallete.button2};
  cursor: pointer;
  background-color: ${(props) => props.theme.pallete.white};
  color: ${(props) => props.theme.pallete.button2};
  height: 45px;
  width: 65px;
  &:hover {
    background-color: ${(props) => props.theme.pallete.button2};
    color: ${(props) => props.theme.pallete.white};
  }
`;
