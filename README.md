# au2-monorepo-vite-pnpm

This monorepository Aurelia 2 project is using PNPM with Vite.  The purpose of the project is show how Vite succeeds and fails when congfigured like this.

The "main" branch is setup to show a working project, but the package html is not loaded as an import.  The p1 package has a single component, hello-world, that gets inserted into the my-app component.

The "export_template" branch shows Vite/Aurelia failing to load the html as an import

To run the project
```bash
pnpm install
pnpm dev
```
