import React from "react";
import { useSelector } from "react-redux";

import {
  View,
  CharacterContainer,
  CharacterImg,
  CharacterName,
  CharacterData,
  Id,
  InfoGroup,
  Key,
  Value,
  Name,
  ImgContainer,
} from "../styles/Character";

const Character = () => {
  const character = useSelector((state) => state.characters.character);
  return (
    <View>
      <ImgContainer>
        <CharacterImg src={character.image} alt="character" />
      </ImgContainer>
      <CharacterContainer>
        <CharacterName>
          <Name>{character.name}</Name>
          <Id>CHARACTER ID: {character.id}</Id>
        </CharacterName>
        <CharacterData>
          <InfoGroup>
            <Key>Status</Key>
            <Value>{character.status}</Value>
          </InfoGroup>
          <InfoGroup>
            <Key>Species</Key>
            <Value>{character.species}</Value>
          </InfoGroup>
          <InfoGroup>
            <Key>Type</Key>
            <Value>{!character.type ? "unknown" : character.type}</Value>
          </InfoGroup>
          <InfoGroup>
            <Key>Gender</Key>
            <Value>{character.gender}</Value>
          </InfoGroup>
          <InfoGroup>
            <Key>Origin</Key>
            <Value>{character.origin.name}</Value>
          </InfoGroup>
          <InfoGroup>
            <Key>Location</Key>
            <Value>{character.location.dimension}</Value>
          </InfoGroup>
          <InfoGroup>
            <Key>Created At</Key>
            <Value>{new Date(character.created).toDateString()}</Value>
          </InfoGroup>
        </CharacterData>
      </CharacterContainer>
    </View>
  );
};

export default Character;
