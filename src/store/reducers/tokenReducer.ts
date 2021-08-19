import { TokenAction, TokenState, GET_TOKEN, GET_SYMPTOMS } from "../types";

const initialState: TokenState = {
  token: "",
};

export default (state = initialState, action: TokenAction): TokenState => {
  switch (action.type) {
    case GET_TOKEN:
      return {
        token: action.payload.Token,
      };
    default:
      return state;
  }
};
