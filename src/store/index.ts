import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import diagnosticReducer from './reducers/diagnosticReducer';
import symptomsReducer from './reducers/symptomsReducer';
import tokenReducer from './reducers/tokenReducer'


const rootReducer = combineReducers({
  token: tokenReducer,
  symptoms: symptomsReducer,
  diagnostics: diagnosticReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;