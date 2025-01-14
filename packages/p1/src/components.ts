import { IRegistry, Registration } from 'aurelia';
import { HelloWorld } from './hello-world';
import { MockService } from './mockService';

export const Components: IRegistry[] = [
    HelloWorld as unknown as IRegistry,
    MockService as unknown as IRegistry
    // DialogInstance as unknown as IRegistry,
    // Registration.transient(DialogContainer, DialogContainer),
    // DefaultFooter as unknown as IRegistry,
    // DialogFactory as unknown as IRegistry,
    // Registration.transient(DialogRenderer, DialogRenderer),
    // AlertModel as unknown as IRegistry,
    // ConfirmModel as unknown as IRegistry,
    // CustomModel as unknown as IRegistry,
    // ModelBase as unknown as IRegistry
];