import * as actions from "../constants";

const initialState = {
  data: [],
  searchResults: [],
  page: 1,
  loading: true,
  error: null,
};

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        searchResults: action.payload,
      };
    case actions.FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actions.SEARCH_DATA:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default Reducers;
