import Server from './startup/server.js';

try {
    new Server().startup();
}
catch(error) {
    console.error('Error starting up the server:', error);
}
