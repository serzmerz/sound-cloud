import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { IUserStore } from 'stores/userStore';
import Stream from './Stream';

interface IHome {
  userStore: IUserStore;
}

@inject('userStore')
@observer
class Home extends React.Component<IHome, {}> {
  public render() {
    return (<Stream userStore={this.props.userStore} />);
  }
}

export default Home;
