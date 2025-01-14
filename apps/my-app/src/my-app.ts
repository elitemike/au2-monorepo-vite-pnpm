import { ILogger, resolve } from 'aurelia';

export class MyApp {
  private readonly logger: ILogger = resolve(ILogger).scopeTo('MyApp');

  public message = 'Hello World from my app.';

  onMainButtonClick() {
    console.debug('my app button click')
    this.logger.debug("From the logger");
  }
}
