import { configure } from 'mobx';
import * as React from 'react';
import { Button } from './Button';
// import SC from 'soundcloud';
// import { Provider } from 'mobx-react';

// SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });

configure({ enforceActions: true });

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button title="Hello" />
      </div>
    );
  }
}

export default App;
