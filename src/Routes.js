import React from "react";
import { Route } from 'react-router-dom';
import Home from './commpenmet/home';
import Translation from './commpenmet/translation';
import App from "./App";
import NotFound from './commpenmet/NotFound';

const routes = [
  {
    path: '/',
    component: App,
    key: 'Header',
    loadData: App.loadData,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
        key: 'home',
        loadData: Home.loadData,
      },
      {
          path: "/translation",
          component: Translation,
          loadData: Translation.loadData,
          exact: true,
          key: 'translation'
      },
      {
        component: NotFound,
      }
    ]
  }

];
export default routes;
