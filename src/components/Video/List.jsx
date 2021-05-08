import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Item from "./ListItem";

const List = () => {
  const data = useSelector((state) => state.data.fetched);
  const videoItem = data?.map((item, index) => <Item key={index} {...item} />);

  return <Wrapper>{videoItem}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;
  background: #ffffff14;
  color: white;
  margin-bottom: 3vh;
  @media (min-width: 950px) {
    align-items: stretch;
    flex-flow: wrap;
    flex-direction: row;
  }
`;

export default List;
