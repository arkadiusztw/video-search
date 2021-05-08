import axios from "axios";
import { FETCH_DATA } from "../types";

const KEY_YOUTUBE = "";
const URL_YOUTUBE = "https://youtube.googleapis.com/youtube/v3/search?";
const KEY_VIMEO = "";
const URL_VIMEO = "https://api.vimeo.com/videos";

export const GetData = ({ request, CurrentAPI }) => {
  console.log("Choice: " + CurrentAPI + " Request: " + request);
  if (CurrentAPI === "youtube") {
    return function (dispatch) {
      dispatch({
        type: FETCH_DATA,
      });

      axios({
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
        url: URL_YOUTUBE,
        params: {
          part: "snippet",
          maxResults: 50,
          key: KEY_YOUTUBE,
          q: request,
          type: "video",
        },
      })
        .then((response) => {
          return response.data.items;
        })
        .then((data) =>
          dispatch({
            type: FETCH_DATA,
            payload: data,
          })
        )
        .catch((error) => {
          console.log("problem with connecting to API" + error);
        });
    };
  } else {
    return function (dispatch) {
      dispatch({
        type: FETCH_DATA,
      });

      axios({
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
        url: URL_VIMEO,
        params: {
          access_token: KEY_VIMEO,
          per_page: 30,
          query: request || "never gonna give you up",
        },
      })
        .then((response) => {
          return response.data.data;
        })
        .then((data) =>
          dispatch({
            type: FETCH_DATA,
            payload: data,
          })
        )
        .catch((error) => {
          console.log("problem with connecting to API" + error);
        });
    };
  }
};
