import axios from "axios";

export const fetchColors = () => async (dispatch) => {
  try {
    const response = await axios.get(
      " https://random-flat-colors.vercel.app/api/random?count=5"
    );
    if (response.status === 200) {
      dispatch({ type: "addColors", payload: response.data.colors });
    }
  } catch (error) {
    console.log(error);
  }
};
