import React, { lazy, Suspense } from 'react';
import RouteEnum from './constants/RouteEnum';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import {
  LoadingOutlined
} from '@ant-design/icons';
import './App.scss';
const AuthPage = lazy(() => import('./views/authorization-page/AuthPage'))
const HomePage = lazy(() => import('./views/home-page/HomePage'));
const NotFoundPage = lazy(() => import('./views/not-found-page/NotFoundPage'));
function App() {
  return (
    <Suspense fallback={<LoadingOutlined />}>
      <Router>
        <Switch>
          <Route exact path={RouteEnum.Auth} component={AuthPage}></Route>
          <Route path={RouteEnum.Home} component={HomePage}></Route>
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
