import { observable } from 'mobx';

class TrackStore {

  @observable public tracks: {};
  @observable public activeTrack: object | null;

  constructor(tracks = []) {
    this.tracks = tracks;
    this.activeTrack = null;
  }

}

const trackStore = new TrackStore();

export default trackStore;
export { TrackStore };
