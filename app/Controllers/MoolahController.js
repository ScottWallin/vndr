import { moolahService } from "../Services/MoolahServices.js"
import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";

function _drawGetMoolah() {
  let moolah = appState.Moolah
  // console.log('money works', moolah);
  setHTML('Moolah', moolah)

}


export class MoolahController {
  constructor() {
    console.log('hi')
    appState.on('Moolah', _drawGetMoolah)
  }

  getMoolah() {
    console.log('moolah')
    moolahService.getMoolah()
  }
  buySnacks(snackName) {
    console.log('buy upgrade')
  }
}