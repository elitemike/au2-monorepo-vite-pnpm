
import { ServiceStartedEvent } from '@exper/p1';
import { IEventAggregator, ILogger, resolve } from 'aurelia';

export class MyApp {
  private readonly logger: ILogger = resolve(ILogger).scopeTo('MyApp');
  private readonly ea: IEventAggregator = resolve(IEventAggregator);

  public message = 'Hello World from my app.';

  constructor() {
    this.ea.subscribe(ServiceStartedEvent, (e: ServiceStartedEvent) => {
      console.debug("event received at main app");
    });
  }

  onMainButtonClick() {
    console.debug('my app button click')
    this.logger.debug("From the logger");
  }
}
