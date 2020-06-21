import App from './app.js';

class Server {
    private app: App;
    private port: number;

    constructor() {
        this.app = new App();
        this.port = 3000;
    }

    startup(): void {
        this.app.express.listen(this.port, (error: Error) => {
            if (error) {
                return console.log('Error starting up the server:', error);
            }
            return console.log(`Server is listening on: ${this.port}`);
        });
    }
}

export default Server;
