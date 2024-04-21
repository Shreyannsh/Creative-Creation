import axios from "axios";

export const fetchColors = () => async (dispatch) => {
  try {
    dispatch({ type: "setIsLoading" });
    const response = await axios.get(
      " https://random-flat-colors.vercel.app/api/random?count=5"
    );
    if (response.status === 200) {
      dispatch({ type: "addColors", payload: response.data.colors });
      dispatch({ type: "setIsLoading" });
    }
  } catch (error) {
    console.log(error);
  }
};
