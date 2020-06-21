import Greeter from './greeter.js';

describe('Greet Test Suite', () => {
    it('should create a new instance', () => {
        const greeter = new Greeter();
        expect(greeter).toBeTruthy();
    });
});
