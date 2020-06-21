import { Request, Response, Router } from 'express';
import { IRoute, IGreet } from '../interfaces/index.js';
import { Greeter } from '../services/index.js';

class HelloWorld implements IRoute {
    private router: Router;
    private greeterService: Greeter;

    constructor(router: Router) {
        this.router = router;
        this.greeterService = new Greeter();
        this.applyRoutes();
    }

    applyRoutes(): void {
        this.router.post('/greet', (req: Request, res: Response) => {
            try {
                const greet: IGreet = {
                    greeting: req.body.greeting,
                    speaker: req.body.speaker
                };
                this.greeterService.greet(greet);
                res.json({ message: 'Greeted successfully!' });
            }
            catch (error) {
                console.error(error);
                res.status(400).json({
                    message: 'Couldn\'t greet.',
                    reason: JSON.stringify(error)
                });
            }
        });

        this.router.get('/last-greet', (_: Request, res: Response) => {
            const lastGreeting = this.greeterService.getLastGreeting();
            res.json({ lastGreeting });
        });

        this.router.get('/last-speaker', (_: Request, res: Response) => {
            const lastSpeaker = this.greeterService.getLastSpeaker();
            res.json({ lastSpeaker });
        });

        this.router.get('/last-talk', (_: Request, res: Response) => {
            const lastTalk = this.greeterService.getLastTalk();
            res.json({ lastTalk });
        });
    }
}

export default HelloWorld;
