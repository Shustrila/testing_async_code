import GameSavingData from './GameSavingData';
import readGameSaving from './readGameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
      return new GameSavingData(await readGameSaving()).json();
    } catch (e) {
      throw new TypeError(e);
    }
  }
}
