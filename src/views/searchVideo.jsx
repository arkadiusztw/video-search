import React from "react";
import styled from "styled-components";
import Search from "../components/Video/Search";
import List from "../components/Video/List";

const SearchVideo = () => {
  return (
    <Wrapper>
      <Search />
      <List />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default SearchVideo;
