import {
  SymptomsAction,
  GET_SYMPTOMS,
  Symptoms,
} from "../types";

const initialState: Symptoms = {
  symptoms: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: SymptomsAction): Symptoms => {
  switch (action.type) {
    case GET_SYMPTOMS:
      return {
        symptoms: action.payload,
      };
    default:
      return state;
  }
};
