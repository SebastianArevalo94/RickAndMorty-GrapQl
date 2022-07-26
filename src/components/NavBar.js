import React, { useRef } from "react";
import { useSelector } from "react-redux";
import {
  CloseIcon,
  HistoryEmpty,
  HistoryIcon,
  HistoryImg,
  HistoryItem,
  HistoryList,
  HistoryName,
  NavBarContainer,
  NavBarText,
  SideBarContainer,
  SidebarGroup,
  SideBarIcon,
  SidebarItem,
  SidebarList,
} from "../styles/NavBar";

const NavBar = () => {
  const sidebar = useRef(null);
  const menuHistory = useRef(null);
  const menuIcon = useRef(null);
  const history = useSelector((state) => state.characters.history);
  const toggleSidebar = () => {
    let display = sidebar.current.style.display;
    if (!display || display === "none") {
      sidebar.current.style.display = "flex";
      sidebar.current.style.height = `${document.documentElement.scrollHeight}px`
    } else if (display === "flex") {
      sidebar.current.style.display = "none";
    }
  };
  const toggleHistory = () => {
    let display = menuHistory.current.style.display;
    if (!display || display === "none") {
      menuHistory.current.style.display = "flex";
      menuIcon.current.style.transform = "rotate(180deg)";
    } else if (display === "flex") {
      menuHistory.current.style.display = "none";
      menuIcon.current.style.transform = "rotate(360deg)";
    }
  };
  return (
    <>
      <NavBarContainer>
        <NavBarText>Sebastian</NavBarText>
        <SideBarIcon onClick={toggleSidebar}>☰</SideBarIcon>
      </NavBarContainer>
      <SideBarContainer ref={sidebar}>
        <CloseIcon onClick={toggleSidebar}>X</CloseIcon>
        <SidebarList>
          <SidebarItem onClick={toggleSidebar}>Main</SidebarItem>
          <SidebarGroup>
            <SidebarItem>Ver historial</SidebarItem>
            <HistoryIcon
              ref={menuIcon}
              onClick={toggleHistory}
              src="https://img.icons8.com/material-rounded/35/ffffff/double-down.png"
            />
          </SidebarGroup>
          <HistoryList ref={menuHistory}>
            {history.length !== 0 ? (
              history.map((item, index) => (
                <HistoryItem key={index}>
                  <HistoryImg src={item.image} alt={item.name} />
                  <HistoryName>{item.name}</HistoryName>
                </HistoryItem>
              ))
            ) : (
              <HistoryEmpty>No hay elementos en el historial.</HistoryEmpty>
            )}
          </HistoryList>
        </SidebarList>
      </SideBarContainer>
    </>
  );
};

export default NavBar;
