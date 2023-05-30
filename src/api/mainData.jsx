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
