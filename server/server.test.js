// const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;

describe('Server', () => {
    describe('GET /', () => {
        it('should give hello world response', (done) => {
            request(app) ///calling the actual app
                .get('/') //specifying the method whether get,post or put.
                .expect(404)
                // .expect({
                //     error: 'Page not found.'
                // })
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    });
                })
                .end(done);
        });
    });

    describe('GET /users', () => {
        it('should test if the response contains the users', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'simran',
                        age: 23
                    });
                })
                .end(done);
        });
    });
});