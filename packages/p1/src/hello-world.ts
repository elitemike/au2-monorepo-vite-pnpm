import { bindable, customElement, IEventAggregator, inject, resolve } from 'aurelia';
import template from "./hello-world.html?raw";
import "./hello-world.css";
import { ServiceStartedEvent } from './serviceStartedEvent';
import { MockService } from './mockService';
import { MathStuff } from '@exper/utils';


@customElement({ name: "hello-world", template })
@inject(IEventAggregator)
export class HelloWorld {
  private service: MockService = resolve(MockService);

  @bindable message = "from P1..";

  onButtonClick() {
    let a = new MathStuff();

    console.debug("on click", a.add(5, 1));
    this.service.startWork();
  }

  constructor(private eventAggregator: IEventAggregator) {
    this.eventAggregator.subscribe(ServiceStartedEvent, (e: ServiceStartedEvent) => {
      console.debug("on work started, informed via event")
    });
  }
}
