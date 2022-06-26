export const actionCreator = {
  SET_AUTH: "SET_AUTH",
  REMOVE_AUTH: "REMOVE_AUTH",
  SET_USER: "SET_USER",
  REMOVE_USER: "REMOVE_USER",
};

const reducer = (state: any, action: { type: string; payload?: object | string }) => {
  switch (action.type) {
    case actionCreator.SET_AUTH:
      return {
        ...state,
        auth: true,
      };
    case actionCreator.REMOVE_AUTH:
      return {
        ...state,
        auth: false,
      };
    case actionCreator.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case actionCreator.REMOVE_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
