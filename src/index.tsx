import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Rstore from './store';
const RootStore = Rstore();
const Root = (): JSX.Element => (
  <Provider store={RootStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

///TODO:
///   UI Default Page 정의 후 UI 최대한 빨리 끝내기.
///   PWA , ServerLess 둘중 먼저 아무거나 하기
