import React from "react";
import styled from "styled-components";
import Player from "../components/Video/Player";
const PlayVideo = () => {
  return (
    <Wrapper>
      <Player />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;

export default PlayVideo;
