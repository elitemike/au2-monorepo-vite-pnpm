# p1

This project is bootstrapped by [aurelia/new](https://github.com/aurelia/new).

## Start dev web server

    npm start

Note this plugin project comes with a dev-app. The above command starts the dev app in `dev-app/` folder. The plugin source code is in `src/` folder.

## Build the plugin in production modern

    npm run build

It builds plugin into `dist/index.js` file.

Note when you do `npm publish` or `npm pack` to prepare the plugin package, it automatically run the above build command by the `prepare` script defined in your package.json `"scripts"` section.

## Consume the plugin

If your plugin is published to npm or a private registry, just install the plugin package.json

    npm install p1

If you want to directly use plugin's git repo.

    npm install git@github.com:username/p1.git

or

    npm install https://some.git.server/username/p1.git

If you want to install from local folder, don't do "npm install ../local/p1/" as the folder's `node_modules/` will cause webpack to complain about duplicated dependency like "@aurelia/metadata".

In this plugin's folder, do

    npm pack

This will pack the plugin into p1
In an application project's main file.

```js
import * as myPlugin from 'p1';
Aurelia
  // Load all exports from the plugin
  .register(myPlugin)
  .app(MyApp)
  .start();
```


## Analyze webpack bundle

    npm run analyze
