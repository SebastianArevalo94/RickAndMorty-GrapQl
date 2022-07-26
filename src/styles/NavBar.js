import styled from "styled-components";

export const NavBarContainer = styled.nav`
  background-color: ${(props) => props.theme.pallete.black};
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const NavBarText = styled.p`
  color: ${(props) => props.theme.pallete.white};
  font-family: "Play", sans-serif;
  font-size: 45px;
  padding-left: 15px;
  cursor: pointer;
`;

export const SideBarIcon = styled.p`
  color: ${(props) => props.theme.pallete.white};
  font-size: 40px;
  padding-right: 15px;
  cursor: pointer;
`;

export const SideBarContainer = styled.div`
  width: 420px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  display: none;
  flex-direction: column;
  background-color: ${(props) => props.theme.pallete.black};
  /* @media (max-width: 500px) {
    width: 75%;
  } */
`;

export const CloseIcon = styled.p`
  color: ${(props) => props.theme.pallete.white};
  font-size: 40px;
  margin: 30px;
  cursor: pointer;
  align-self: flex-end;
  font-family: "Play", sans-serif;
`;

export const SidebarList = styled.ul`
  /* margin-top: 30px; */
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
`;

export const SidebarGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const SidebarItem = styled.li`
  font-family: "Play", sans-serif;
  font-weight: ${(props) => props.theme.text.fontWeight};
  font-size: 25px;
  text-align: center;
  color: ${(props) => props.theme.pallete.white};
  cursor: pointer;
`;

export const HistoryIcon = styled.img``;

export const HistoryList = styled.ul`
  list-style: none;
  display: none;
  flex-direction: column;
`;
export const HistoryItem = styled.li`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const HistoryImg = styled.img`
  height: 100px;
`;
export const HistoryName = styled.p`
  color: ${(props) => props.theme.pallete.white};
  font-family: "Play", sans-serif;
  font-size: 35px;
`;

export const HistoryEmpty = styled.p`
  color: ${(props) => props.theme.pallete.white};
  font-family: "Play", sans-serif;
  font-size: 35px;
  text-align: center;
  padding-right: 10px;
`;

