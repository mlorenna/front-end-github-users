import React, { lazy, Suspense, Dispatch } from 'react';
import RouteEnum from './constants/RouteEnum';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import {
  LoadingOutlined
} from '@ant-design/icons';
import './App.scss';
import IAction from './models/ActionInterface';
import MainNav from './views/components/main-nav/MainNav';

const AuthPage = lazy(() => import('./views/authorization-page/AuthPage'))
const HomePage = lazy(() => import('./views/home-page/HomePage'));
const NotFoundPage = lazy(() => import('./views/not-found-page/NotFoundPage'));

interface IProps {
  readonly history: History;
  readonly dispatch: Dispatch<IAction<any>>;
}

function App(props: React.PropsWithChildren<IProps>) {
  return (
    <ConnectedRouter history={props.history}>
      <Suspense fallback={<LoadingOutlined />}>
        <MainNav/>
        <Router>
          <Switch>
            <Route exact path={RouteEnum.Auth} component={AuthPage}></Route>
            <Route path={RouteEnum.Home} component={HomePage}></Route>
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </Suspense>
    </ConnectedRouter>
  );
}

export default App;
