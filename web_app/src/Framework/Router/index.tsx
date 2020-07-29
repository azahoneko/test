import * as React from "react";
import {Route, Redirect} from 'react-router';

import routes from '../../Routes';
import {getProp} from "../Support/Helpers";

export interface RouteModel {
  id: string
  path: string
  component: string | React.Component | any,
  wrapped?: string | React.Component | any,
  isPrivate?: boolean,
  hasAccess?: (store: any) => boolean,
  onAccessRejectLink?: string,
}

function RenderComponent(route) {

  if (route.wrapped) return (props) => React.createElement(route.wrapped, props, <route.component/>)
  return route.component
}

function RenderRoute(route) {

  return (
    <Route
      exact
      sensitive
      key={route.id}
      path={route.path}
      component={RenderComponent(route)}
    />
  )
}

function PrivateRoute(props) {
  const {route, store} = props

  if (route.hasAccess && !route.hasAccess(store.getState())) return <Redirect to={getProp(route, 'onAccessRejectLink', '/')} />

  return RenderRoute(route)
}


export default function (store) {

  return routes.map((route: RouteModel) => {

    if (typeof route.component === "string") route.component = require(`../../Pages${route.component}`).default;
    if (route.isPrivate) return <PrivateRoute key={route.id} route={route} store={store} />

    return RenderRoute(route);
  })
}
