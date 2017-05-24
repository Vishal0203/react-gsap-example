import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import rootSaga from './sagas/index';
import {syncHistoryWithStore} from 'react-router-redux';
// import your components
import Main from './components/Main';
import GsapContainer from './components/gsap/GsapContainer';
import 'Styles/root.css';

injectTapEventPlugin();

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);
store.runSaga(rootSaga);

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Main}>
        <IndexRoute component={GsapContainer}/>
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);
