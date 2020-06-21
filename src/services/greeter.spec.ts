import Greeter from './greeter.js';
import { IGreet } from '../interfaces/index.js';
import { Greetings } from '../enum/index.js';

describe('[Unit] Greet Service Test Suite', () => {
    it('should create a new instance', () => {
        const greeter = new Greeter();
        expect(greeter).toBeTruthy();
    });

    it('should greet, with proper params', () => {
        const talk = `Excuse me... Sir Jaime would like to say: ${Greetings.GoodEvening}`;
        const greeter = new Greeter();
        const greet: IGreet = {
            greeting: Greetings.GoodEvening,
            speaker: 'Jaime'
        };
        greeter.greet(greet);
        expect(greeter.getLastGreeting()).toBe(Greetings.GoodEvening);
        expect(greeter.getLastSpeaker()).toBe('Jaime');
        expect(greeter.getLastTalk()).toBe(talk);
    });

    it('should throw an Error, greeting with no speaker', () => {
        const greeter = new Greeter();
        const greet: IGreet = {
            greeting: Greetings.GoodEvening,
            speaker: ''
        };
        expect(() => greeter.greet(greet)).toThrow();
    });
});
