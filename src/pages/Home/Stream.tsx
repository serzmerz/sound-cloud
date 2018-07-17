import { observer } from 'mobx-react';
import * as React from 'react';
import { IUserStore } from 'stores/userStore';

interface IStream {
  userStore: IUserStore;
}

@observer
class Stream extends React.Component<IStream, {}> {

  public render() {
    const { userStore } = this.props;
    return (
      <div>
        {userStore.me}
        <input onChange={this.onChange}/>
      </div>
    );
  }

  private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return this.props.userStore.changeName(e.target.value);
  }
}

export default Stream;
