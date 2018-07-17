import { action, observable } from 'mobx';

export interface IUserStore {
  me: string;
  changeName: (text: string) => void;
}

class UserStore implements IUserStore {

  @observable public me = 'Some';

  constructor() {
    // this.me = null;
  }

  @action
  public changeName(text: string) {
    this.me = text;
  }

}

const userStore = new UserStore();

export default userStore;
export { UserStore };
