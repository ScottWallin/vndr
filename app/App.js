import { ValuesController } from "./Controllers/ValuesController.js";
import { SnacksController } from "./Controllers/SnacksController.js";
import { MoolahController } from "./Controllers/MoolahController.js";

class App {
  // valuesController = new ValuesController();
  snacksController = new SnacksController();
  moolahController = new MoolahController();
}

window["app"] = new App();
