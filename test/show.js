process.env.NODE_ENV = 'test';
const { request } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { response } = require('express');
const should = chai.should();
const app = require('../app');
const expect = chai.expect;

chai.use(chaiHttp);


//const app = 'http://localhost:5000';


describe('Shows', () => {
    describe('/GET', () => {
        it('it should return a 200 response', (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                })
        })
        it('it should respond with an object', (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.body.should.be.a('object');
                    res.body.should.have.property('text').eql('Hello World!');
                    done();
                })
        })
    })
    describe('/POST', () => {
        let shows = {

            "payload": [
                {
                    "country": "UK",
                    "description": "What's life like when you have enough children to field your own football team?",
                    "drm": true,
                    "episodeCount": 1,
                    "genre": "Reality",
                    "image": {
                        "showImage": "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg"
                    },
                    "language": "English",
                    "nextEpisode": null,
                    "primaryColour": "#ff7800",
                    "seasons": [
                        {
                            "slug": "show/16kidsandcounting/season/1"
                        }
                    ],
                    "slug": "show/16kidsandcounting",
                    "title": "16 Kids and Counting",
                    "tvChannel": "GEM"
                }
            ]

        }


        it(`it should return a "No valid payload was detected" object when POST request is sent without a valid body`, (done) => {
            chai.request(app)
                .post('/')
                .send('{null}')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    expect(res.body).to.have.property('text').eql('No valid payload was detected');
                done();
                })
        });
        it(`it should respond with an error when a POST with an invalid json is sent`, (done) => {
            chai.request(app)
                .post('/')
                .send('{"invalid"}')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    expect(res.body).to.have.property('text').eql('No valid payload was detected');
                done();
                })
        })
        it(`it should respond with an object containing a "response" array`, (done) => {
            chai.request(app)
                .post('/')
                .send(shows)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('response');
                    done();
                })
        })
        it(`it returns an array of object/s with the keys "image", "slug" and "title" `, (done) => {
            chai.request(app)
                .post('/')
                .send(shows)
                .end((err, res) => {
                    expect(res.body.response[0]).to.have.keys(['image', 'slug', 'title']);
                    done();
                })
        })

    })
});