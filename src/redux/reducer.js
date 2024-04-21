const initialState = {
  colorList: [],
  creativeList: [],
  filteredList: [],
  showAddCreation: false,
  filter: {
    color: "",
    searchText: "",
  },
};

export const creativeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addColors":
      return { ...state, colorList: action.payload };

    case "addCreation":
      return {
        ...state,
        creativeList: [...state.creativeList, action.payload],
      };

    case "addFilterColor":
      return { ...state, filter: { ...state.filter, color: action.payload } };

    case "addSearchText":
      return {
        ...state,
        filter: { ...state.filter, searchText: action.payload },
      };

    case "toggleShowAddCreation":
      return { ...state, showAddCreation: !state.showAddCreation };

    case "serachFunction":
      let data = [...state.creativeList];

      if (state.filter.color !== "") {
        data = data.filter((creation) => creation.color === state.filter.color);
      }

      if (state.filter.searchText !== "") {
        data = data.filter(
          (creation) =>
            creation.title
              .toLowerCase()
              .includes(state.filter.searchText.toLowerCase()) ||
            creation.subtitle
              .toLowerCase()
              .includes(state.filter.searchText.toLowerCase())
        );
      }
      return { ...state, filteredList: data };
    default:
      return state;
  }
};
