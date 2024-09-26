const assert = require('assert');
const app = require('../../src/app');

describe('\'seksyen\' service', () => {
  it('registered the service', () => {
    const service = app.service('seksyen');

    assert.ok(service, 'Registered the service (seksyen)');
  });
});
