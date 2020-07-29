import * as React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import {Router} from 'react-router';
import {createBrowserHistory} from 'history';
import {syncHistoryWithStore} from 'react-router-redux';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'

import {store, persistor} from './Framework/Store';
import RoutesFactory from './Framework/Router';

import './Styles/index.scss';

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store);
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <ApolloProvider client={client}>
            <Router history={history}>
              {RoutesFactory(store)}
            </Router>
          </ApolloProvider>
        </PersistGate>
      </Provider>
    );
  }

}

export default App;
