import {
  DiagnosticState,
  DiagnosticAction,
  GET_DIAGNOSTIC,
  SET_LOADING,
} from "../types";

const initialState: DiagnosticState = {
  data: null,
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (
  state = initialState,
  action: DiagnosticAction
): DiagnosticState => {
  switch (action.type) {
    case GET_DIAGNOSTIC:
      return {
        data: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
