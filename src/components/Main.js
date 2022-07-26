import React from "react";
import { ThemeProvider } from "styled-components";
import {
  Button,
  Add,
  IconContainer,
  LoadingIcon,
  LoadingText,
  InfoText,
} from "../styles/Main";
import Character from "./Character";
import History from "./History";
import NavBar from "./NavBar";
import Loading from "../assets/loading.gif";
import { GetCharacter } from "../GraphQl/Queries";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { addNew, setView } from "../redux/charactersSlice";

const theme = {
  pallete: {
    black: "rgb(31, 38, 45)",
    white: "rgb(255, 255, 255)",
    line: "rgb(243, 243, 243)",
    button1:
      "linear-gradient(90deg, rgba(2,185,217,1) 0%, rgba(134,0,255,1) 100%)",
    button2: "rgb(130, 101, 252)",
    subtitle: "rgb(165, 165, 165)",
  },
  text: {
    fontWeight: "600",
  },
};

const Main = () => {
  const history = useSelector((state) => state.characters.history);
  const { loading, data, refetch } = useQuery(GetCharacter);
  const dispatch = useDispatch();
  const random = () => Math.floor(Math.random() * (826 - 1 + 1) + 1);
  const AddCharacter = async () => {
    refetch({
      id: random(),
    });
    if (!loading) {
      dispatch(setView(data.character));
      dispatch(addNew(data.character));
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <NavBar />
        {history.length === 0 ? (
          <InfoText>No se ha cargado ningun personaje</InfoText>
        ) : loading ? (
          <IconContainer>
            <LoadingIcon src={Loading} alt="Loading Icon" />
            <LoadingText>Cargando...</LoadingText>
          </IconContainer>
        ) : (
          <Character />
        )}
        <Add>
          <Button onClick={AddCharacter}>GENERATE</Button>
        </Add>
        {history.length !== 0 ? <History /> : ""}
      </>
    </ThemeProvider>
  );
};

export default Main;
