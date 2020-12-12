## Electron development

### Folder Structure

- src
    - main
        - main.js: The entrypoint for the Main Process of Electron
    - renderer
        - main.js: The entrypoint for the Renderer Process of Electron
        - index.html: The first website loaded inside the electron app
        - Here you can also place .vue components, etc
    - dist
        - Webpack builds the bundled main.js (renderer and main) and webpages to this folder
    - build
        - The binary installer/executables are build here

### Developing

- `npm install` to install the dependencies
- `npm run dev` start the webpack-server in the console. Hot Reloading, etc. enabled
- `npm run pack` builds the app as executable, but not packed into the installer
- `npm run dist` build the app as installer
- `npm run dist:standalone` build the app as standalone, without need for installation

### Debugging

- When started with `npm run dev`, you can attach the VsCode debugger `Electron: Renderer` for debugging of the renderer Process. Settings breakpoints, etc is supported
- When staring via VsCode debugger `Electron: Main` you can debug the main process, set breakpoints and stuff



