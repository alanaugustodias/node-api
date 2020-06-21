import request from 'supertest';
import Server from '../startup/server.js';

describe('[API] Greet Route Test Suite', () => {
    let server: Server;
    const baseUrl = 'http://localhost:3000';

    beforeAll(() => {
        server = new Server();
        server.startup();
    });

    afterAll(() => {
        server.stop();
    });

    it('should request greet, with proper params', done => {
        request(baseUrl)
            .post('/greet')
            .send({
                greeting: 'Hello',
                speaker: 'John'
            })
            .end((_, response) => {
                expect(response.status).toEqual(200);
                expect(response.body.message).toBe('Greeted successfully!');
                done();
            });
    });

    it('should greet and get last greeting', done => {
        request(baseUrl)
            .post('/greet')
            .send({
                greeting: 'GoodAfternoon',
                speaker: 'Ashley'
            })
            .end((error, response) => {
                expect(response.status).toEqual(200);
                expect(response.body.message).toBe('Greeted successfully!');

                request(baseUrl)
                    .get('/last-greet')
                    .end((lastGreetError, lastGreetResponse) => {
                        expect(lastGreetResponse.status).toEqual(200);
                        expect(lastGreetResponse.body.lastGreeting).toBe('GoodAfternoon');
                        done();
                    });
            });
    });

    it('should greet and get last speaker', done => {
        request(baseUrl)
            .post('/greet')
            .send({
                greeting: 'GoodNight',
                speaker: 'Adrian'
            })
            .end((error, response) => {
                expect(response.status).toEqual(200);
                expect(response.body.message).toBe('Greeted successfully!');

                request(baseUrl)
                    .get('/last-speaker')
                    .end((lastSpeakerError, lastSpeakerResponse) => {
                        expect(lastSpeakerResponse.status).toEqual(200);
                        expect(lastSpeakerResponse.body.lastSpeaker).toBe('Adrian');
                        done();
                    });
            });
    });

    it('should greet and get last talk', done => {
        request(baseUrl)
            .post('/greet')
            .send({
                greeting: 'GoodBye',
                speaker: 'Jane'
            })
            .end((error, response) => {
                expect(response.status).toEqual(200);
                expect(response.body.message).toBe('Greeted successfully!');

                request(baseUrl)
                    .get('/last-talk')
                    .end((lastTalkError, lastTalkResponse) => {
                        const talk = 'Excuse me... Sir Jane would like to say: GoodBye';
                        expect(lastTalkResponse.status).toEqual(200);
                        expect(lastTalkResponse.body.lastTalk).toBe(talk);
                        done();
                    });
            });
    });

    it('should request greet, sending String', done => {
        request(baseUrl)
            .post('/greet')
            .send('GoodMorning')
            .end((_, response) => {
                expect(response.status).toEqual(400);
                expect(response.body.message).toBe('Couldn\'t greet.');
                done();
            });
    });

    it('should request greet, sending wrong Greeting', done => {
        request(baseUrl)
            .post('/greet')
            .send({
                greeting: 'foo',
                speaker: 'John'
            })
            .end((_, response) => {
                expect(response.status).toEqual(400);
                expect(response.body.message).toBe('Couldn\'t greet.');
                done();
            });
    });

    it('should request greet, not sending speaker', done => {
        request(baseUrl)
            .post('/greet')
            .send({
                greeting: 'GoodMorning'
            })
            .end((_, response) => {
                expect(response.status).toEqual(400);
                expect(response.body.message).toBe('Couldn\'t greet.');
                done();
            });
    });

    it('should request greet, sending Array', done => {
        request(baseUrl)
            .post('/greet')
            .send([{
                greeting: 'GoodAfternoon',
                speaker: 'John'
            }])
            .end((_, response) => {
                expect(response.status).toEqual(400);
                expect(response.body.message).toBe('Couldn\'t greet.');
                done();
            });
    });
});
