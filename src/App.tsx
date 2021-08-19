import React, { FC, FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import { RootState } from "./store";
import { getSymptoms } from "./store/actions/symptomsAction";
import { getToken } from './store/actions/tokenAction';
import { getDiagnostic } from './store/actions/diagnosticAction';

const App: FC = () => {
  const dispatch = useDispatch();
  const tokenData = useSelector((state: RootState) => state.token.token);
  const symptomsData = useSelector((state: RootState) => state.symptoms.symptoms);

  useEffect(() => {
    dispatch(getToken())    
  }, [])

  useEffect(() => {
    if (tokenData) {
      dispatch(getSymptoms(tokenData))
    }
  }, [tokenData])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(getDiagnostic(tokenData, [symptomsData[1]], 1999))
  }

  return (
  <div className="has-text-centered">
    <form onSubmit={handleSubmit}>
      <button type="submit">ok</button>
    </form>
  </div>
  );
};

export default App;
