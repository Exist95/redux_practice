let initailState = {
  click: 0,
  discount: 0,
  id: "",
  password: "",
};

function reducer(state = initailState, action) {
  /*if (action.type === "INCREMENT") {
    return { ...state, click: state.click + action.payload.num }; */
  switch (action.type) {
    case "INCREMENT":
      return { ...state, click: state.click + action.payload.num };
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      };
    case "DESCREMENT":
      return { ...state, discount: state.discount + action.payload.num2 };
    default:
      return { ...state };
  }
}

export default reducer;
