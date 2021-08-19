import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import {
  SymptomsAction,
  Symptom,
  GET_SYMPTOMS,
} from "../types";

const ApiMedicHost = "https://sandbox-healthservice.priaid.ch";
const lang = "en-gb";
const format = "json";

export const getSymptoms = (
  token: string
): ThunkAction<void, RootState, null, SymptomsAction> => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `${ApiMedicHost}/symptoms?language=${lang}&format=${format}&token=${token}`,
        {
          method: "GET",
        }
      );

      const resData: Symptom[] = await res.json();
      dispatch({
        type: GET_SYMPTOMS,
        payload: resData,
      });
    } catch (err) {}
  };
};
