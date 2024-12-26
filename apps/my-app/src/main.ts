import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { HelloWorld } from '@exper/p1';


console.debug("helloworld", HelloWorld)
Aurelia
  .register(HelloWorld)
  .app(MyApp)
  .start();


let H = new HelloWorld();
console.debug("h", H.message);