import { appState } from "../AppState.js";

class MoolahServices {
  getMoolah() {
    appState.Moolah += .25
    console.log('current monies', appState.Moolah)
  }
  loseMoolah() {

  }

}
export const moolahService = new MoolahServices()