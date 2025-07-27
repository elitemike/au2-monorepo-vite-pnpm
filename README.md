# au2-monorepo-vite-pnpm

This monorepository Aurelia 2 project is using PNPM with Vite. Using VS code on Windows, debugging should function in the package files (A native windows environment may work as well, not WSL)

The project shows a working application that loads a plugin which is also linked to another local package.  

To run the project, ensure pnpm is installed and ready to go. [PNPM Installation](https://pnpm.io/installation)  Clone the project and run the 2 commands before launching vs code debugger.  The launch configuration does not currently start the application

```bash
pnpm install
pnpm watch:my-app
```
