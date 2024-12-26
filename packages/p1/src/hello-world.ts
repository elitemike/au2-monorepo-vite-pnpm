import { bindable, customElement } from 'aurelia';
import template from "./hello-world.html?raw";

@customElement({ name: "hello-world", template })
export class HelloWorld {
  @bindable message = "from P1..";

  onButtonClick() {
    console.debug("on click")
  }
}
