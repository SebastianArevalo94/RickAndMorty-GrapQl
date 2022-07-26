import styled from "styled-components";

export const View = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const ImgContainer = styled.div`
  width: 420px;
  margin: 0 15px;
`;

export const CharacterImg = styled.img`
  width: 100%;
`;

export const CharacterContainer = styled.div`
  background-color: ${(props) => props.theme.pallete.white};
  box-shadow: rgb(136 152 170 / 15%) 0px 0px 2rem 0px;
  border-radius: 3px;
  width: 420px;
  padding: 0px 20px;
`;

export const CharacterName = styled.div`
  padding: 10px 5px;
  border-bottom: 1.5px solid ${(props) => props.theme.pallete.line};
`;

export const Name = styled.p`
  margin: 10px 0px;
  font-family: "Play", sans-serif;
  font-size: 20px;
  font-weight: ${(props) => props.theme.text.fontWeight};
  color: ${(props) => props.theme.pallete.black};
`;

export const Id = styled.p`
  font-family: "Play", sans-serif;
  font-size: 10px;
  color: ${(props) => props.theme.pallete.subtitle};
  font-weight: 600;
`;

export const CharacterData = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
`;
export const InfoGroup = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2.8px solid ${(props) => props.theme.pallete.line};
`;

export const Key = styled.p`
  font-family: "Play", sans-serif;
  font-weight: ${(props) => props.theme.text.fontWeight};
  color: ${(props) => props.theme.pallete.black};
`;
export const Value = styled.p`
  font-family: "Play", sans-serif;
  color: ${(props) => props.theme.pallete.black};
`;