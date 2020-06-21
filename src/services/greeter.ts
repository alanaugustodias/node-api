import { Greetings } from '../enum/index.js';
import { IGreet } from '../interfaces/index.js';

class Greeter {
    private lastGreeting: Greetings | null;
    private lastSpeaker: string;
    private lastTalk: string;

    constructor() {
        this.lastGreeting = null;
        this.lastSpeaker = '';
        this.lastTalk = '';
    }

    greet(greet: IGreet) : string {
        if (!(greet.greeting in Greetings)) {
            throw new Error(`To greet someone, you must say one of the following: ${Object.keys(Greetings).join(',')}`);
        }

        if (!greet.speaker) {
            throw new Error(`To greet someone, you must say your name!`);
        }

        this.lastGreeting = greet.greeting;
        this.lastSpeaker = greet.speaker;
        this.lastTalk = `Excuse me... Sir ${this.lastSpeaker} would like to say: ${this.lastGreeting}`;
        return this.lastTalk;
    }

    getLastGreeting() : Greetings | null {
        return this.lastGreeting;
    }

    getLastSpeaker() : string {
        return this.lastSpeaker;
    }

    getLastTalk() : string {
        return this.lastTalk;
    }
}

export default Greeter;
