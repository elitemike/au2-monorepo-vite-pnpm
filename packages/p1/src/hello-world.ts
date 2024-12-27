import { bindable, customElement } from 'aurelia';
import template from "./hello-world.html?raw";
import "./hello-world.css";
import { MathStuff } from "@exper/utils";

@customElement({ name: "hello-world", template })
export class HelloWorld {
  @bindable message = "from P1..";

  onButtonClick() {
    let a = new MathStuff();

    console.debug("on click", a.add(5, 1));
  }
}
