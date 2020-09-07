const t = require('../hide.json');

const should = require('should');

describe('talk', function () {
    describe('t', function () {
        it('should has token as key', function () {
            t.should.have.property('token');
        });
    });
});
