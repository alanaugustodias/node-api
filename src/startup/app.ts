import bodyParser from 'body-parser';
import express, { Express } from 'express';
import cors from 'cors';
import * as AppRoutes from '../routes/index.js';

class App {
    public express: Express;

    constructor() {
        this.express = express();
        this.configureCors();
        this.mountRoutes();
    }

    private configureCors(): void {
        this.express.use(bodyParser.urlencoded({
            extended: false,
            limit: '5mb'
        }));
        this.express.use(bodyParser.json({
            limit: '25mb'
        }));
        this.express.use(cors());
    }

    private mountRoutes(): void {
        const router = express.Router();
        Object.entries(AppRoutes).forEach(([, Route]) => {
            new Route(router).applyRoutes();
        });

        this.express.use('/', router);
    }
}

export default App;
