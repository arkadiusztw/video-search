import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FetchVideoID } from "../../actions/DataActions.jsx";
import { useSelector } from "react-redux";

export const Item = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const choiceAPI = useSelector((state) => state.data.choiceAPI);

  const thumbnails = () => {
    if (choiceAPI === "youtube") {
      return props.snippet?.thumbnails.high.url;
    } else {
      return props.pictures?.sizes[4].link;
    }
  };
  const title = () => {
    if (choiceAPI === "youtube") {
      return props.snippet?.title;
    } else {
      return props.name;
    }
  };
  const description = () => {
    if (choiceAPI === "youtube") {
      return props.snippet?.description.substring(0, 150);
    } else {
      return props.description?.substring(0, 150);
    }
  };

  const videoId = () => {
    if (choiceAPI === "youtube") {
      return props.id.videoId;
    } else {
      return props.uri.replace(/\D/g, "");
    }
  };

  const pushId = (e) => {
    e.preventDefault();
    dispatch(FetchVideoID(videoId()));
    history.push("/player");
  };

  return (
    <Wrapper onClick={pushId}>
      <Thumbnail alt={title()} src={thumbnails()}></Thumbnail>
      <Title>{title()}</Title>
      <Description>{description()}</Description>
    </Wrapper>
  );
};
export default Item;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 190px;
  border: 0.5px solid #2121217d;
  background: #00000047;
  padding: 15px;
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  font-size: 1rem;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  @media (min-width: 950px) {
    width: 15%;
    margin: 0.2vw;
    max-width: 560px;
    min-height: 400px;
    border-radius: 10px;
    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }
`;

const Title = styled.span`
  margin: 10px;
  text-align: center;
  font-weight: bold;
  min-height: 35px;
  color: white;
`;
const Description = styled.span`
  color: gray;
  word-break: break-word;
`;
const Thumbnail = styled.img`
  width: 100%;
  height: auto;
`;
