import { bindable, customElement } from 'aurelia';
import template from "./hello-world.html";

@customElement({ name: "hello-world", template })
export class HelloWorld {
  @bindable message = "from P1";
}
