import * as actions from "../store/actions";
import { BASE_API_URL } from "../store/constants";
import axios from "axios";

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(actions.fetchRequest());
    await axios
      .get(`${BASE_API_URL}/products`)
      .then((res) => {
        dispatch(actions.fetchSuccess(res.data.products));
      })
      .catch((error) => {
        dispatch(actions.fetchFail(error));
      });
  };
};

/* export const fetchData = () => () => {
  console.log("jbjk");
  try {
    const data = axios.get(`${BASE_API_URL}/products`);

    console.log("ojj");
    // dispatch({ type: actions.FETCH_POST_SUCCESS, payload: data });
  } catch (error) {
    // dispatch({ type: actions.FETCH_POST_FAILED, payload: error.message });
    console.log(error.message);
  }
}; */
