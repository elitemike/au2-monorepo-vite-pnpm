import { DI, IContainer } from 'aurelia';
import { Components } from './components';

const configuration = {
    register(container: IContainer): IContainer {
        console.debug("I'm registering stuff", container)

        const c = container.register(
            ...Components,
        );

        console.debug("return container")
        return c;
    },

    createContainer(): IContainer {
        console.debug('creating container')
        return this.register(DI.createContainer());
    }
}



export const P1Configuration = {
    customize(components: any[] = []) {
        return { ...configuration };
    },
    ...configuration
}