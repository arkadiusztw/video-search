import React from "react";
import styled from "styled-components";
import Search from "../components/Video/Search";
const SearchVideo = () => {
  return (
    <Wrapper>
      <Search />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default SearchVideo;
