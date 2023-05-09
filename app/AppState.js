import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { Snack } from "./Models/Snacks.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  // /** @type {import('./Models/Snacks').Snack[]} */
  snacks = [
    new Snack({ name: 'Cheeto', price: '1.50', imgUrl: 'https://unsplash.com/photos/_CJ5z7HY8lk' }),
    new Snack({ name: 'Apple', price: '.75', imgUrl: 'https://unsplash.com/photos/co1wmDhPjKg' }),
    new Snack({ name: 'Ice Cream', price: '2.00', imgUrl: 'https://images.unsplash.com/photo-1633933358116-a27b902fad35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80' })
  ]


  Moolah = 0

}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
