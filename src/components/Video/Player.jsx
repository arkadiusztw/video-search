import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";
import Vimeo from "@u-wave/react-vimeo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "../Buttons/button";
import { RiSearchLine } from "react-icons/ri";

const Player = () => {
  const id = useSelector((state) => state.data.videoId);
  const choiceAPI = useSelector((state) => state.data.choiceAPI);
  const choiceAPIPlayer = () => {
    if (choiceAPI === "youtube") {
      return <YoutubeVideo videoId={id} opts={opts} />;
    } else {
      return <VimeoVideo video={id} autoplay={true} responsive={true} />;
    }
  };

  const opts = { width: "100%", playerVars: { autoplay: 1 } };

  return (
    <Wrapper>
      <Header>
        <Link to="/">
          <ReturnButton>
            <Icon />
            Powrót do wyszukiwarki
          </ReturnButton>
        </Link>
      </Header>
      <VideoFrame>{choiceAPIPlayer()}</VideoFrame>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #080808;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  align-items: baseline;
  @media (min-width: 801px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Header = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 801px) {
    margin-bottom: 100px;
  }
`;

const ReturnButton = styled(Button)`
  color: white;
  cursor: pointer;
`;

const VideoFrame = styled.div`
  width: 80vw;
  height: 80vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const YoutubeVideo = styled(YouTube)`
  height: auto;
  width: 100vw;
  max-width: 1450px;
  min-height: 300px;
  @media (min-width: 801px) {
    min-height: 750px;
  }
`;
const VimeoVideo = styled(Vimeo)`
  height: auto;
  width: 100vw;
  max-width: 1450px;
  min-height: 300px;
  @media (min-width: 801px) {
    min-height: 750px;
  }
`;

const Icon = styled(RiSearchLine)`
  margin: 10px;
`;
export default Player;
