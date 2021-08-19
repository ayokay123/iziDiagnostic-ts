export const GET_TOKEN = "GET_TOKEN";
export const GET_SYMPTOMS = "GET_SYMPTOMS";
export const GET_DIAGNOSTIC = "GET_DIAGNOSTIC";
export const SET_LOADING = "GET_LOADING";
export const SET_ERROR = "GET_ERROR";

//Symptoms
export interface Symptom {
  ID: number;
  Name: string;
}

export interface Symptoms {
  symptoms: Symptom[]
}

export interface SymptomsAction {
  type: string;
  payload: Symptom[];
}

//Token
export interface Token {
  Token: string;
  ValidThrough: number;
}

export interface TokenAction {
  type: string;
  payload: Token;
}

export interface TokenState {
  token: string;
}

//Diagnostic
export interface Specialisation {
  ID: number;
  Name: string;
  SpecialistID: number;
}

export interface Diagnostic {
  Issue: {
    ID: number;
    Icd: string;
    IcdName: string;
    Accuracy: number;
    Name: string;
    ProfName: string;
    Ranking: number;
  };
  Specialisation: Specialisation[];
}

export interface DiagnosticState {
  data: Diagnostic[] | null;
  loading: boolean;
}

interface GetDiagnosticAction {
  type: string;
  payload: Diagnostic[];
}

interface SetLoadingAction {
  type: string;
  payload: Diagnostic[];
}

export type DiagnosticAction = GetDiagnosticAction | SetLoadingAction;
