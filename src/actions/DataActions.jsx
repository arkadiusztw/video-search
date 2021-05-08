import {
  FETCH_REQUESTS,
  FETCH_VIDEO_ID,
  FETCH_DATA,
  FETCH_CHOICEAPI,
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
