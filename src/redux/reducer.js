const initialState = {
  colorList: [],
  creativeList: [],
  showAddCreation: false,
};
console.log(initialState);
export const creativeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addColors":
      return { ...state, colorList: action.payload };

    case "addCreation":
      return {
        ...state,
        creativeList: [...state.creativeList, action.payload],
      };

    case "toggleShowAddCreation":
      return { ...state, showAddCreation: !state.showAddCreation };
    default:
      return state;
  }
};
