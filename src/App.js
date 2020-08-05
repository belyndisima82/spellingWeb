import React from 'react';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import sagas from './redux/sagas';
import { Route, Switch, Redirect } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import createHistory from './history';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
} from 'react-router-redux';
import './App.scss';
import Home from './components/views/home';
import Word from './components/views/word';

const history = createHistory;
const middleware = routerMiddleware(history);

const App = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    || compose;
  const sagaMiddleware = createSagaMiddleware();
  const store =
    createStore(
      combineReducers({
        ...reducers,
        router: routerReducer,
      }),
      {},
      composeEnhancers(applyMiddleware(sagaMiddleware, ReduxThunk, middleware)),
    );
  sagaMiddleware.run(sagas);
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/word" component={Word} />
            <Redirect to="/" />
          </ Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;