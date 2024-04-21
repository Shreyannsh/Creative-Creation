const initialState = {
  colorList: [],
  creativeList: [],
};
console.log(initialState);
export const creativeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addColors":
      return { ...state, colorList: action.payload };
    default:
      return state;
  }
};
