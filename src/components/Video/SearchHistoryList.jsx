import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { PushRequest } from "../../actions/DataActions.jsx";
import { GetData } from "../../api/api";

const List = () => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.data.requests);
  const CurrentAPI = useSelector((state) => state.data.choiceAPI);

  const handleRequest = (e) => {
    e.preventDefault();
    const request = e.target.innerHTML;
    dispatch(PushRequest(request));
    dispatch(GetData({ request, CurrentAPI }));
  };

  const historyItem = history?.map((item, index) => (
    <Item key={index} value={item} onClick={handleRequest}>
      {item}
    </Item>
  ));

  return (
    <Wrapper>
      <Items>{historyItem}</Items>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: auto;
  z-index: 99;
  background-color: #1d1d1d;
  flex-direction: column;
  top: 0;
`;

const Items = styled.ul`
  color: white;
`;
const Item = styled.li`
  list-style: none;
  margin: 10px;
  padding: 10px;
  &:hover {
    background: #0000002e;
  }
`;
export default List;
