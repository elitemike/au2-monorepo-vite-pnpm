import { bindable, customElement } from 'aurelia';
const template = '<h1 class="hello-world">Hello World! ${message}</h1>'; // require("./hello-world.html");

@customElement({ name: "hello-world", template })
export class HelloWorld {
  @bindable message = "from P1";
}
