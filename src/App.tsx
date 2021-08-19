import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getToken } from "./store/actions/tokenAction";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Main from './pages/Main/index';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToken());
  }, []);

  return (
    <div>
      <Navbar />
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={Main} path="/diagnostic" />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
