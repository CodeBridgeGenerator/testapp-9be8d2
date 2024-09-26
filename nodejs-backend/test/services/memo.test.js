const assert = require('assert');
const app = require('../../src/app');

describe('\'memo\' service', () => {
  it('registered the service', () => {
    const service = app.service('memo');

    assert.ok(service, 'Registered the service (memo)');
  });
});
