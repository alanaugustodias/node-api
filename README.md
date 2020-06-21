# Node-API Example


This is a repository meant to explore and test the latest features from both: Javascript and NodeJs's environment.

Some of the libraries that make this work:

- [Typescript](https://www.typescriptlang.org/)

- [Nodemon](https://www.npmjs.com/package/nodemon)

- [Jest](https://jestjs.io/)

- [Express](https://expressjs.com/)

- [ESLint](https://eslint.org/)


## Requirements


As for the latest versions mentioned above, NodeJs must be on 14, at least.
Also, by having Typescript as dev-dependency, there's no need to install it globally, if you don't want to.


## Usage


To start using this example, you can clone it and try the scripts below:

- `npm install`: Install all dependencies of this code

- `npm run dev`: Transpile TS files into JS, and start Nodemon on dist/index.js

- `npm run dev:watch`: Transpile TS files into JS, and start Nodemon in watch mode, on dist/index.js

- `npm run start`: Start Node on dist/index.js

- `npm run test`: Transpile TS files into JS, and start Jest

- `npm run test:watch`: Transpile TS files into JS, and start Jest in watch mode

- `npm run test:coverage`: Transpile TS files into JS, and start Jest in coverage mode

- `npm run lint`: Start ESLint validations

- `npm run compile`: Transpile TS files into JS and start Node on dist/index.js (used for `dev:watch`)

- `npm run clean`: Clean dist folder


## Structure basis


To start this project, a bunch of tutorials and discussions were used as base to put this all together.

You can take a look at some of them here:

- [Modern TypeScript project template](https://github.com/dandv/typescript-modern-project#import-your-own-modules-without-specifying-an-extension)

- [Jest Issue #9395](https://github.com/facebook/jest/issues/9395)

- [Typescript configuration for NodeJs 14](https://stackoverflow.com/questions/61305578/what-typescript-configuration-produces-output-closest-to-node-js-14-capabilities/61305579#61305579?newreg=ecb2031857884ee1b4185b7b9a4f59c8)


## Discussions

You are free to reach me at anytime to ask/contribute on any relevant related content.