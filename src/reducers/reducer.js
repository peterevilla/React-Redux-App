import { FETCH_DATA, DATA_SUCCESS, DATA_ERROR } from "../actions";

const initialState = {
  boredData: [],
  loading: false,
  fetch: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case FETCH_DATA:
      newState = {
        ...state,
        loading: true,
      };
      console.log(newState);
      return newState;

    case DATA_SUCCESS:
      newState = {
        ...state,
        boredData: action.payload,
        loading: false,
        fetch: true,
        error: "",
      };
      return newState;

    case DATA_ERROR:
      newState = {
        ...state,
        loading: false,
        fetch: false,
        error: action.payload
      };

      return newState;
    default:
      return state;
  }
};
