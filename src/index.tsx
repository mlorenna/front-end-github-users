import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserHistory, History } from 'history';
import * as serviceWorker from './serviceWorker';
import { Store } from 'redux';
import IStore from './models/StoreInterface';
import rootStore from './stores/rootStore';
import { Provider } from 'react-redux';

(async (window: Window): Promise<void> => {
  const initialState: Partial<IStore> = {};
  const history: History = createBrowserHistory({ basename: '/' });
  const store: Store<IStore> = rootStore(initialState, history);

  const rootEl: HTMLElement | null = document.getElementById('root');
  const render = (Component: typeof App, el: HTMLElement | null): void => {
    ReactDOM.render(
      <Provider store={store}>
       <Component history={history} dispatch={store.dispatch}/>
      </Provider>,
      el
    );
  };

  render(App, rootEl);
})(window);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
