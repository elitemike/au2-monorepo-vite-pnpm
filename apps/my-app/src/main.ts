import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { P1Configuration } from '@exper/p1';


Aurelia
  .register(P1Configuration)
  .app(MyApp)
  .start();
