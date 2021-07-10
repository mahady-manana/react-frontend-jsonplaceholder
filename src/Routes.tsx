import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainContainer } from './components/MainContainer';
import useModules from './modules';
export const Routes = () => {
  const routes = useModules();
  return (
    <>
      <MainContainer>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                path={route.path}
                exact={route.exact}
                key={`routes-${index}`}
              >
                {route.component}
              </Route>
            );
          })}
        </Switch>
      </MainContainer>
    </>
  );
};
