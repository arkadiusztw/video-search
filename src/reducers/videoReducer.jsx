import {
  FETCH_REQUESTS,
  FETCH_DATA,
  FETCH_VIDEO_ID,
  FETCH_CHOICEAPI,
  isAPIready,
} from "../types";

const initialState = {
  requests: [],
  choiceAPI: "",
  fetched: [],
  videoId: "148751763",
  isAPIready: true,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUESTS:
      return { ...state, requests: [action.payload, ...state.requests] };

    case FETCH_DATA:
      return { ...state, fetched: action.payload };

    case FETCH_CHOICEAPI:
      return { ...state, choiceAPI: action.payload };

    case isAPIready:
      return { ...state, isAPIready: action.payload };

    case FETCH_VIDEO_ID:
      return { ...state, videoId: action.payload };

    default:
      return state;
  }
};
