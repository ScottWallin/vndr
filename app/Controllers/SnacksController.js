import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";

function _drawSnacks() {
  let snacks = appState.snacks
  let template = ''
  snacks.forEach(s => template += s.ListTemplate)
  setHTML('snacks', template)
}

export class SnacksController {
  constructor() {
    console.log('hello friend')
    _drawSnacks()
  }
}