const chai = require('chai');
const request = require('supertest');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

describe('Questions', () => {
 
  describe('POST /question', () => {
    const acceptedData = {
      id: 1,
      createdOn: Date,
      createdBy: 21, // represents the user asking the question
      meetup: 11, // represents the meetup the question is for
      title: 'Clarification',
      body: 'Could you please provide more clarifications?',
      vote: 0,
    };
    const nonAcceptedData = {
      id: 1,
      createdOn: Date,
      createdBy: 21, // represents the user asking the question
      meetup: 11, // represents the meetup the question is for
      // title: 'What Do I Need To Do To Succeed In The Bootcamp',
      body: 'provident obcaecati, maxime neque ipsa ut sunt consequatur?',
      vote: 0,
    };

    it('should respond with status code 201 created', (done) => {
      request(app)
        .post('/api/v1/questions')
        .send(acceptedData)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err) => {
          if (err) return done(err);
          return done();
        });
    });

    it('should respond with status code 400 not created', (done) => {
      request(app)
        .post('/api/v1/questions')
        .send(nonAcceptedData)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err) => {
          if (err) return done(err);
          return done();
        });
    });
  });
    
  });