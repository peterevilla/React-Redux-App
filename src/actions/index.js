import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_ERROR = "DATA_ERROR";

export const getData = () => (dispatch) => {
  dispatch({ type: FETCH_DATA });

  setTimeout(() => {
    axios
      .get("http://www.boredapi.com/api/activity/")
      .then((response) => {
        console.log(response.data);
        dispatch({ type: DATA_SUCCESS, payload: response.data });
      })
      .catch(err => {
        console.log("Error", err);
        dispatch({ type: DATA_ERROR, payload: err });
      });
  }, 1000);
};
