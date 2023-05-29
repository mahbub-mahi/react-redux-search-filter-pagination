import * as actions from "../constants";

export function fetchRequest() {
  return {
    type: actions.FETCH_REQUEST,
  };
}

export function fetchSuccess(payload) {
  return {
    type: actions.FETCH_SUCCESS,
    payload,
  };
}

export function fetchFail(error) {
  return {
    type: actions.FETCH_FAILED,
    payload: error,
  };
}

export const searchData = (payload) => ({
  type: actions.SEARCH_DATA,
  payload,
});

export const filterByPriceLH = (payload) => ({
  type: actions.SORT_BY_PRICE_LH,
  payload,
});

export const filterByPriceHL = (payload) => ({
  type: actions.SORT_BY_PRICE_HL,
  payload,
});

export const sortByAlphabetASC = (payload) => ({
  type: actions.SORT_BY_ALPHABET_ASC,
  payload,
});

export const sortByAlphabetDESC = (payload) => ({
  type: actions.SORT_BY_ALPHABET_DESC,
  payload,
});
