import React from "react";
import { animateScroll as scroll } from 'react-scroll';
import { useDispatch, useSelector } from "react-redux";
import { setView } from "../redux/charactersSlice";
import {
  HistoryContainer,
  Title,
  Items,
  Item,
  ItemImg,
  ItemName,
  ViewButton,
} from "../styles/History";

const History = () => {
  const history = useSelector((state) => state.characters.history);
  const dispatch = useDispatch();
  return (
    <HistoryContainer>
      <Title>History</Title>
      <Items>
        {history.map((item, index) => (
          <Item key={index}>
            <ItemImg src={item.image} alt={item.name}></ItemImg>
            <ItemName>{item.name}</ItemName>
            <ViewButton
              onClick={() => {
                dispatch(setView(item));
                scroll.scrollTo({duration:1000});
              }}
            >
              VIEW
            </ViewButton>
          </Item>
        ))}
      </Items>
    </HistoryContainer>
  );
};

export default History;
