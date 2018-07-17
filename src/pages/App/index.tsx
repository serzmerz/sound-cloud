import createBrowserHistory from 'history/createBrowserHistory';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Home from 'pages/Home';
import * as React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import userStore from 'stores/userStore';

configure({ enforceActions: true });

const stores = { userStore };

const history = createBrowserHistory();

class App extends React.Component {
  public render() {
    return (
      <Provider {...stores}>
      <React.Fragment>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      <DevTools />
      </React.Fragment>
      </Provider>
    );
  }
}

export default App;
