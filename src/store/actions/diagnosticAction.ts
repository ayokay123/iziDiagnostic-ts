import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import {
  Symptom,
  GET_DIAGNOSTIC,
  DiagnosticAction,
  Diagnostic,
  SET_LOADING,
} from "../types";

const ApiMedicHost = "https://sandbox-healthservice.priaid.ch";
const lang = "en-gb";
const format = "json";

export const getDiagnostic = (
  token: string,
  symptoms: Symptom[],
  year: number
): ThunkAction<void, RootState, null, DiagnosticAction> => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `${ApiMedicHost}/diagnosis?symptoms=[${symptoms
          .map((s) => s.ID)
          .join(
            ","
          )}]&language=${lang}&format=${format}&token=${token}&gender=male&year_of_birth=${year}`,
        {
          method: "GET",
        }
      );

      const resData: Diagnostic[] = await res.json();
      dispatch({
        type: GET_DIAGNOSTIC,
        payload: resData,
      });
    } catch (err) {
    }
  };
};

export const setLoading = (): DiagnosticAction => {
    return {
      type: SET_LOADING,
      payload: []
    }
  }
  