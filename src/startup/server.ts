import http from 'http';
import App from './app.js';

class Server {
    private app: App;
    private port: number;
    private server: http.Server | null;

    constructor() {
        this.app = new App();
        this.port = 3000;
        this.server = null;
    }

    startup(): void {
        this.server = this.app.express.listen(this.port, (error: Error) => {
            if (error) {
                return console.log('Error starting up the server:', error);
            }
            return console.log(`Server is listening on: ${this.port}`);
        });
    }

    stop(): void {
        if (this.server) {
            this.server.close();
        }
    }
}

export default Server;
