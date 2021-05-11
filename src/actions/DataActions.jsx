import {
  FETCH_REQUESTS,
  FETCH_VIDEO_ID,
  FETCH_DATA,
  FETCH_CHOICEAPI,
  isAPIready,
} from "../types";

export const PushRequest = (item) => {
  return {
    type: FETCH_REQUESTS,
    payload: item,
  };
};

export const FetchData = (data) => {
  return {
    type: FETCH_DATA,
    payload: data,
  };
};

export const IsAPIready = (status) => {
  return {
    type: isAPIready,
    payload: status,
  };
};

export const FetchVideoID = (item) => {
  return {
    type: FETCH_VIDEO_ID,
    payload: item,
  };
};

export const FetchChoiceAPI = (item) => {
  return {
    type: FETCH_CHOICEAPI,
    payload: item,
  };
};
