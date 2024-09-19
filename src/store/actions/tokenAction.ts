import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { TokenAction, Token, GET_TOKEN } from "../types";
import credentials from "./../../credentials.json";

const CryptoJS = require("crypto-js");

const AuthHost = "https://sandbox-authservice.priaid.ch";
const password = credentials.password;
const user_id = credentials.user_id;

export const getToken = (): ThunkAction<void, RootState, null, TokenAction> => {
  return async (dispatch) => {
    try {
      const computedHash = CryptoJS.HmacMD5(`${AuthHost}/login`, password);
      const computedHashString = computedHash.toString(CryptoJS.enc.Base64);
      const res = await fetch(`${AuthHost}/login`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user_id}:${computedHashString}`,
        },
      });

      const resData: Token = await res.json();
      dispatch({
        type: GET_TOKEN,
        payload: resData,
      });
    } catch (err) {}
  };
};
