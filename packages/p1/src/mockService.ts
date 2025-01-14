import { IEventAggregator, ILogger, inject, resolve } from 'aurelia';
import { ServiceStartedEvent } from './serviceStartedEvent';

@inject(IEventAggregator)
export class MockService {
    //private readonly logger: ILogger = resolve(ILogger).scopeTo('MockService');

    constructor(private eventAggregator: IEventAggregator) {

    }

    startWork() {
        this.eventAggregator.publish(new ServiceStartedEvent());
    }

    stopWork() {

    }
}