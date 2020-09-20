'use strict';

const mochaPlugin = require('serverless-mocha-plugin');
const expect = mochaPlugin.chai.expect;
let getRequestWrapped = mochaPlugin.getWrapper('getReservationDetails', '/.webpack/service/handler.js', 'getReservationDetails');
let addRequestWrapped = mochaPlugin.getWrapper('addReservationDetails', '/.webpack/service/handler.js', 'addReservationDetails');

// These tests are not complete but with these templates implemented, every scenario can be tested.

describe('getReservationDetails', () => {
  before((done) => {
    done();
  });

  it('Testing GET API', async () => {
    const response = await getRequestWrapped.run({
      method: 'GET',
      pathParameters: {
        id: 'abc',
      }
    });
    const body = JSON.parse(response.body);
    expect(response.statusCode).to.be.equal(200); 
    });
});

describe('addReservationDetails', () => {
  before((done) => {
    done();
  });

  it('Testing POST API', async () => {
    const response = await addRequestWrapped.run({
      method: 'POST',
      body: JSON.stringify({
        pinCodes: {
          mainDoorCode: 3,
          roomDoorCode: 6
        },
        emails: {
          bookingConfirmationSent: false,
          checkInInfosSent: true
        }
    })
  });
    const body = JSON.parse(response.body);
    expect(response.statusCode).to.be.equal(201);
  });
});

describe('updateReservationDetails', () => {
  before((done) => {
    done();
  });

  it('Testing POST API', async () => {
    const response = await addRequestWrapped.run({
      method: 'PUT',
      body: JSON.stringify({
        id: 'abc',
        pinCodes: {
          mainDoorCode: 3,
          roomDoorCode: 6
        },
        emails: {
          bookingConfirmationSent: false,
          checkInInfosSent: true
        }
    })
  });
    const body = JSON.parse(response.body);
    expect(response.statusCode).to.be.equal(201);
  });
});