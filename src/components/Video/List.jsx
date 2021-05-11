import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Item from "./ListItem";
import ReactLoading from "react-loading";

const List = () => {
  const data = useSelector((state) => state.data.fetched);
  const isAPIready = useSelector((state) => state.data.isAPIready);

  const videoItem = data?.map((item, index) => <Item key={index} {...item} />);

  return (
    <>
      {isAPIready ? (
        <Wrapper>{videoItem}</Wrapper>
      ) : (
        <Loading>
          <ReactLoading type={"cylon"} width={150} />
        </Loading>
      )}
    </>
  );
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
  margin-bottom: 5vh;
  @media (min-width: 950px) {
    align-items: stretch;
    flex-flow: wrap;
    flex-direction: row;
  }
`;

const Loading = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  justify-content: center;
  flex-direction: row;
  flex-flow: wrap;
  align-items: stretch;
  color: white;
`;

export default List;
